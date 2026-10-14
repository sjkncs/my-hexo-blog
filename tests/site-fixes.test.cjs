const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
const filters = {}, generators = {}, tags = {};
const hexo = {config: {root: '/my-hexo-blog/', url: 'https://sjkncs.github.io/my-hexo-blog',title:'Yangting SONG',description:'Personal notes'}, base_dir: path.resolve(__dirname, '..'),
  extend: {filter: {register: (name, fn) => {filters[name] = fn;}},
    generator: {register: (name, fn) => {generators[name] = fn;}}, tag: {register: (name, fn) => {tags[name] = fn;}}}};
vm.runInNewContext(fs.readFileSync(path.join(__dirname, '../scripts/site-fixes.js'), 'utf8'), {hexo, require});

test('project prefix handles raw HTML and CSS without changing external or prefixed URLs', () => {
  const output = filters['after_render:html']('<a href="/music/"><img src="/img/许嵩.jpg"><img data-src="/my-hexo-blog/img/bg.jpg"><a href="https://example.com/a"><div style="background:url(/img/bg.jpg)">');
  assert.match(output, /href="\/my-hexo-blog\/music\/"/);
  assert.match(output, /src="\/my-hexo-blog\/img\/许嵩.jpg"/);
  assert.match(output, /data-src="\/my-hexo-blog\/img\/bg.jpg"/);
  assert.match(output, /href="https:\/\/example.com\/a"/);
  assert.match(output, /url\(\/my-hexo-blog\/img\/bg.jpg\)/);
  assert.doesNotMatch(output, /my-hexo-blog\/my-hexo-blog/);
});
test('old published article URLs stay canonical', () => {
  assert.equal(filters.post_permalink.call({slug: 'vae-music-aplayer'}, '2025/01/08/vae-music-aplayer/'), '2025/01/07/vae-music-aplayer/');
  assert.equal(filters.post_permalink.call({slug: 'other'}, '2026/10/14/other/'), '2026/10/14/other/');
  assert.equal(generators['compatibility-routes']().length, 2);
});
test('music has an accessible load action and platform fallback, with no eager fetch', () => {
  const html = tags.meting(['308168565', 'netease', 'playlist']);
  assert.match(html, /<button type="button">/);
  assert.match(html, /role="status"/);
  assert.match(html, /https:\/\/music.163.com\/#\/playlist\?id=308168565/);
  assert.doesNotMatch(html, /<script|autoplay/);
  assert.throws(() => tags.meting(['<bad>', 'netease', 'playlist']));
});
test('music tags nested in HTML are rendered and no longer leak into visible text', () => {
  const data = filters.after_post_render({content: '<div><p>{% meting "60198" "netease" "playlist" "theme:#4facfe" %}</p></div>'});
  assert.doesNotMatch(data.content, /\{% meting/);
  assert.match(data.content, /class="music-widget"/);
  assert.doesNotMatch(data.excerpt, /\{% meting|music-widget/);
});
test('generated project page has its own route and title instead of the home layout', () => {
  const route = generators['project-feed']();
  assert.equal(route.path, 'projects/index.html');
  assert.equal(route.data.path, route.path);
  assert.equal(route.data.layout, 'projects');
  assert.equal(route.data.title, '公开项目动态');
  assert.match(route.data.content, /github.com/);
});
test('rendered excerpts do not execute legacy scripts or retain decorative inline styles', () => {
  const data = filters.after_post_render({description:'Excerpt',content:'<h2>🎵 Heading</h2><div style="color:purple">Content</div><script>danger()</script>'});
  assert.doesNotMatch(data.excerpt, /script|danger|purple/);
  assert.match(data.content, /<h2>Heading<\/h2>/);
  assert.doesNotMatch(data.content, /style="/);
  assert.match(data.content, /<script>danger\(\)<\/script>/);
});
test('search and RSS entries use canonical routes and escape source text', () => {
  const posts=[{title:'Title < &',path:'2026/test/',description:'Summary < &',date:new Date('2026-10-14'),tags:{toArray:()=>[{name:'AI'}]},content:'<p>Searchable</p><script>ignoreMe()</script>'}];
  const routes=generators['fieldnotes-search-and-feed']({posts:{sort:()=>({toArray:()=>posts})}});
  const data=JSON.parse(routes[0].data);
  assert.equal(data[0].url,'/my-hexo-blog/2026/test/');
  assert.equal(data[0].content,'Searchable');
  assert.match(routes[1].data,/Title &lt; &amp;/);
  assert.match(routes[1].data,/<rss version="2.0">/);
});
