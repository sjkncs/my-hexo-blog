const fs = require('node:fs');
const path = require('node:path');
const cheerio = require('cheerio');
const base = path.resolve(__dirname, '../public');
const root = '/my-hexo-blog/';
const errors = [];
let pages = 0;
function targetExists(url, from) {
  if (!url || /^(?:https?:|data:|mailto:|tel:|javascript:|#|\/\/)/i.test(url)) return;
  let clean;
  try { clean = decodeURIComponent(url.split(/[?#]/)[0]); } catch { errors.push(`Malformed URL: ${url}`); return; }
  if (clean.startsWith('/') && !clean.startsWith(root)) { errors.push(`Missing project prefix in ${from}: ${clean}`); return; }
  const target = clean.startsWith(root) ? path.join(base, clean.slice(root.length)) : path.resolve(path.dirname(from), clean);
  if (!fs.existsSync(target) && !fs.existsSync(path.join(target, 'index.html'))) errors.push(`Broken local URL in ${path.relative(base, from)}: ${url}`);
}
function visit(dir) {
  for (const entry of fs.readdirSync(dir, {withFileTypes: true})) {
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) visit(file);
    else if (entry.name.endsWith('.html')) {
      pages++;
      const html = fs.readFileSync(file, 'utf8');
      const $ = cheerio.load(html);
      $('[href],[src],[data-src],[poster]').each((_, el) => {
        for (const attr of ['href', 'src', 'data-src', 'poster']) targetExists($(el).attr(attr), file);
      });
      $('pre,code,script,style').remove();
      if ($('body').text().includes('{% meting')) errors.push(`Unrendered music tag in ${file}`);
      for (const match of html.matchAll(/url\(['"]?([^)'"\s]+)['"]?\)/g)) targetExists(match[1], file);
      const scripts = [...html.matchAll(/<script[^>]*src=['"]([^'"]+)['"]/g)].map(m => m[1]);
      if (scripts.filter(s => /APlayer\.min\.js/.test(s)).length > 1) errors.push(`Duplicate APlayer library: ${file}`);
    }
  }
}
visit(base);
for (const required of ['404.html', 'page/2/index.html', 'projects/index.html', 'search.xml', 'search-index.json', 'feed.xml', 'css/fieldnotes.css', 'js/fieldnotes.js', '2026/10/14/shenzhen-research-notes/index.html', '2025/01/07/vae-music-aplayer/index.html', '2025/01/08/vae-music-aplayer/index.html']) {
  if (!fs.existsSync(path.join(base, required))) errors.push(`Missing route: ${required}`);
}
const search = JSON.parse(fs.readFileSync(path.join(base, 'search-index.json'), 'utf8'));
if (!search.length || new Set(search.map(p => p.url)).size !== search.length) errors.push('Search index must contain unique article URLs');
for (const post of search) targetExists(post.url, path.join(base, 'index.html'));
const projectPage = cheerio.load(fs.readFileSync(path.join(base, 'projects/index.html'), 'utf8'));
if (projectPage('.project-card').length !== 10 || projectPage('[data-category="all"]').length !== 1) errors.push('Project index controls or entries missing');
const categories = new Set(['engineering', 'research', 'applications', 'resources']);
projectPage('.project-card').each((_, card) => {
  const element = projectPage(card);
  if (!categories.has(element.attr('data-category'))) errors.push('Invalid project category');
  if (!/^https:\/\/github.com\/sjkncs\/[A-Za-z0-9_.-]+$/.test(element.find('h2 a').attr('href'))) errors.push('Unexpected project URL');
});
const home = cheerio.load(fs.readFileSync(path.join(base, 'index.html'), 'utf8'));
if (!home('.lead-story img').length || !home('.main-nav').length) errors.push('Homepage content or navigation missing');
const secondPage=cheerio.load(fs.readFileSync(path.join(base,'page/2/index.html'),'utf8'));
if(secondPage('.lead-story').length || !secondPage('.writing-row').length || !secondPage('.pagination a').length) errors.push('Second index page must show article pagination, not duplicate homepage');
const notFound=cheerio.load(fs.readFileSync(path.join(base,'404.html'),'utf8'));
if(notFound('meta[name="robots"]').attr('content')!=='noindex'||!notFound('[data-open-search]').length) errors.push('404 page needs noindex and recovery navigation');
if (errors.length) { console.error(errors.join('\n')); process.exit(1); }
console.log(`PASS: ${pages} HTML pages, local links/assets, compatibility routes, search and player scripts`);
