/* Keep rendered content valid under the GitHub Pages project prefix. */
const fs = require('node:fs');
const path = require('node:path');
const {escapeHTML} = require('hexo-util');
const cheerio = require('cheerio');

const root = () => hexo.config.root;
const canonical = new Map([
  ['vae-music-aplayer', '2025/01/07/vae-music-aplayer/'],
  ['welcome-to-my-blog', '2025/01/07/welcome-to-my-blog/'],
]);
hexo.extend.filter.register('post_permalink', function (permalink) {
  return canonical.has(this.slug) ? canonical.get(this.slug) : permalink;
}, 20);

hexo.extend.filter.register('after_post_render', function (data) {
  data.content = data.content.replace(/(?:<p>\s*)?\{%\s*meting\s+"(\d+)"\s+"netease"\s+"(song|playlist)"[^%]*%\}(?:\s*<\/p>)?/g,
    (_, id, type) => renderMusic([id, 'netease', type]));
  const $ = cheerio.load(data.content);
  $('script,style,.music-widget').remove();
  data.excerpt = `<p>${escapeHTML(data.description || $('body').text().replace(/\{%[^%]*%\}/g, '').replace(/\s+/g, ' ').slice(0, 180))}</p>`;
  return data;
}, 20);

function renderMusic(args) {
  const [id, server, type] = args;
  if (!/^\d+$/.test(id) || server !== 'netease' || !['song', 'playlist'].includes(type)) throw new Error('Invalid music source');
  const href = `https://music.163.com/#/${type}?id=${id}`;
  return `<section class="music-widget" data-id="${id}" data-server="${server}" data-type="${type}">
<div class="music-widget-heading"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M9 18V5l12-2v13M9 8l12-2"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>在线音乐</div>
<p class="music-widget-status" role="status">点击加载后获取歌单，播放需要手动操作。</p>
<button type="button">加载${type === 'playlist' ? '歌单' : '单曲'}</button>
<a href="${href}" target="_blank" rel="noopener noreferrer">在网易云音乐打开</a>
<div class="music-widget-player"></div></section>`;
}

hexo.extend.tag.register('meting', renderMusic);
hexo.extend.filter.register('after_render:html', function (html) {
  return html.replace(/\b(href|src|data-src|poster)=(['"])\/(?!\/|my-hexo-blog\/)([^'"]*)\2/g,
    (_, attr, quote, value) => `${attr}=${quote}${root()}${value}${quote}`)
    .replace(/url\((['"]?)\/(?!\/|my-hexo-blog\/)([^)'"\s]+)\1\)/g,
      (_, quote, value) => `url(${quote}${root()}${value}${quote})`)
    .replace(/\bcontent=(['"])\/img\/([^'"]*)\1/g,
      (_, quote, value) => `content=${quote}${hexo.config.url}/img/${value}${quote}`)
    .replace(/href=(['"])\/my-hexo-blog\/docs\/quick-start\/(theme-install|basic-config|content-creation)\/\1/g,
      (_, quote, slug) => `href=${quote}${root()}docs/quick-start/${slug}.html${quote}`)
    .replace(/href=(['"])\/my-hexo-blog\/docs\/(?:pages\/(?:page-types|links|gallery)|tags\/(?:built-in|custom)|faq\/(?:troubleshooting|upgrade)|advanced\/(?:performance|seo|custom-style)|theme-config|plugins)\/\1/g,
      (match, quote) => {
        const group = match.includes('/pages/') ? 'pages' : match.includes('/tags/') || match.includes('/plugins/') ? 'tags' : match.includes('/faq/') ? 'faq' : 'advanced';
        return `href=${quote}${root()}docs/${group}/${quote}`;
      });
}, 30);

hexo.extend.generator.register('local-aplayer', () => [
  {path: 'vendor/APlayer.min.js', data: () => fs.createReadStream(require.resolve('aplayer/dist/APlayer.min.js'))},
  {path: 'vendor/APlayer.min.css', data: () => fs.createReadStream(require.resolve('aplayer/dist/APlayer.min.css'))},
]);

hexo.extend.generator.register('compatibility-routes', () => [...canonical].map(([slug, target]) => {
  const href = root() + target;
  return {path: `2025/01/08/${slug}/index.html`, data: `<!doctype html><html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="canonical" href="${hexo.config.url}/${target}"><meta http-equiv="refresh" content="0;url=${href}"><title>页面已迁移</title></head><body><a href="${href}">打开文章</a></body></html>`};
}));

hexo.extend.generator.register('project-feed', () => {
  const snapshot = JSON.parse(fs.readFileSync(path.join(hexo.base_dir, 'data/projects.json'), 'utf8'));
  const icon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M8 4l-6 8 6 8M16 4l6 8-6 8M14 3l-4 18"/></svg>';
  const cards = snapshot.projects.map(repo => `<section class="project-card"><h3>${icon}<a href="${escapeHTML(repo.html_url)}">${escapeHTML(repo.name)}</a></h3><p>${escapeHTML(repo.description || '项目说明见仓库。')}</p><p class="project-meta">${escapeHTML(repo.language || '文档 / 资源')} · ${repo.stargazers_count} stars · 最近推送 ${repo.pushed_at.slice(0, 10)}</p></section>`).join('');
  return {path: 'projects/index.html', layout: 'page', data: {
    path: 'projects/index.html', layout: 'page', type: 'page',
    title: '公开项目动态', date: '2026-10-14', updated: snapshot.collected_at, comments: false,
    content: `<p>这里展示公开仓库的最新信息，按最近推送排序。仓库描述来自 GitHub，不代表独立验证的成果或上线状态。</p><p>快照更新：${escapeHTML(snapshot.collected_at)}（UTC）。每日尝试同步，文章正文独立维护。</p><div class="project-grid">${cards}</div><p><a href="https://github.com/sjkncs?tab=repositories">查看全部公开仓库</a></p>`,
  }};
});
