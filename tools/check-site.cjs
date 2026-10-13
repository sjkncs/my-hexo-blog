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
      $('pre,code,script,style').remove();
      if ($('body').text().includes('{% meting')) errors.push(`Unrendered music tag in ${file}`);
      $('[href],[src],[data-src],[poster]').each((_, el) => {
        for (const attr of ['href', 'src', 'data-src', 'poster']) targetExists($(el).attr(attr), file);
      });
      for (const match of html.matchAll(/url\(['"]?([^)'"\s]+)['"]?\)/g)) targetExists(match[1], file);
      const scripts = [...html.matchAll(/<script[^>]*src=['"]([^'"]+)['"]/g)].map(m => m[1]);
      if (scripts.filter(s => /APlayer\.min\.js/.test(s)).length > 1) errors.push(`Duplicate APlayer library: ${file}`);
    }
  }
}
visit(base);
for (const required of ['projects/index.html', 'search.xml', '2025/01/07/vae-music-aplayer/index.html', '2025/01/08/vae-music-aplayer/index.html']) {
  if (!fs.existsSync(path.join(base, required))) errors.push(`Missing route: ${required}`);
}
if (errors.length) { console.error(errors.join('\n')); process.exit(1); }
console.log(`PASS: ${pages} HTML pages, local links/assets, compatibility routes, search and player scripts`);
