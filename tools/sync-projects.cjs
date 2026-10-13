const fs = require('node:fs');
const path = require('node:path');
const {execFileSync} = require('node:child_process');
const names = ['agentx', 'dsh-research', 'shenzhen-housing-redevelopment', 'gui-agent-framework',
  'bili-ai-index', 'Ding-AI', 'smarttravel-qingyuan', 'guishan-island-tourism', 'PandaQuantFlow', 'paper-plot-skills'];
const projects = names.map(name => {
  const repo = JSON.parse(execFileSync('gh', ['api', `repos/sjkncs/${name}`], {encoding: 'utf8', timeout: 60000}));
  if (repo.private || repo.html_url !== `https://github.com/sjkncs/${name}` || repo.fork) throw new Error(`Unexpected project: ${name}`);
  return Object.fromEntries(['name', 'html_url', 'description', 'language', 'stargazers_count', 'pushed_at'].map(key => [key, repo[key]]));
}).sort((a, b) => b.pushed_at.localeCompare(a.pushed_at));
const target = path.join(__dirname, '../data/projects.json');
fs.mkdirSync(path.dirname(target), {recursive: true});
const snapshot = {collected_at: new Date().toISOString(), source: 'GitHub public repository API', projects};
fs.writeFileSync(target, JSON.stringify(snapshot, null, 2) + '\n');
console.log(`Synced ${projects.length} public project entries`);
