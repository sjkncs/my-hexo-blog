const fs = require('node:fs');
const path = require('node:path');
const {escapeHTML} = require('hexo-util');
const catalog = JSON.parse(fs.readFileSync(path.join(hexo.base_dir, 'data/project-catalog.json'), 'utf8'));
const icons = new Map();
const emoji = /[\u{1F000}-\u{1FAFF}\u2600-\u27BF\uFE0F\u200D]/gu;

hexo.extend.helper.register('clean_title', text => String(text || '').replace(emoji, '').trim());
hexo.extend.helper.register('site_icon', name => {
  if (!/^[a-z0-9-]+$/.test(name)) throw new Error('Invalid icon name');
  if (!icons.has(name)) {
    const svg = fs.readFileSync(require.resolve(`lucide-static/icons/${name}.svg`), 'utf8');
    icons.set(name, svg.replace('<svg ', '<svg aria-hidden="true" focusable="false" '));
  }
  return icons.get(name);
});
hexo.extend.helper.register('site_projects', () => {
  const data = JSON.parse(fs.readFileSync(path.join(hexo.base_dir, 'data/projects.json'), 'utf8'));
  return data.projects.map(repo => {
    const entry = catalog.find(item => item.name === repo.name);
    if (!entry) throw new Error(`Missing curated project: ${repo.name}`);
    return {...repo, ...entry};
  });
});
hexo.extend.helper.register('project_snapshot', () => JSON.parse(fs.readFileSync(path.join(hexo.base_dir, 'data/projects.json'), 'utf8')).collected_at);
hexo.extend.helper.register('article_summary', post => {
  const override = {'quant-trading-system':'量化因子、模型复现与策略分析的历史项目记录；数值以原文实验条件为准。'};
  return override[post.slug] || String(post.description || '').replace(emoji, '').trim();
});
hexo.extend.helper.register('article_minutes', post => {
  const plain = String(post.content || '').replace(/<[^>]*>/g, '');
  return Math.max(1, Math.ceil(plain.length / 700));
});
hexo.extend.helper.register('safe_json', value => JSON.stringify(value).replace(/</g, '\\u003c'));
hexo.extend.helper.register('category_name', post => post.categories && post.categories.length ? post.categories.toArray()[0].name : '随笔');
hexo.extend.helper.register('html_escape', escapeHTML);
