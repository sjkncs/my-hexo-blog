(() => {
  const doc = document.documentElement;
  const root = document.body.dataset.root;
  const themeButton = document.querySelector('#theme-toggle');
  const darkMedia = matchMedia('(prefers-color-scheme: dark)');
  function isDark() { return doc.dataset.theme ? doc.dataset.theme === 'dark' : darkMedia.matches; }
  function syncTheme() { themeButton.setAttribute('aria-pressed', String(isDark())); }
  syncTheme();
  darkMedia.addEventListener('change', syncTheme);
  themeButton.addEventListener('click', () => {
    doc.dataset.theme = isDark() ? 'light' : 'dark';
    try { localStorage.setItem('fieldnotes-theme', doc.dataset.theme); } catch {}
    syncTheme();
  });
  const menu = document.querySelector('#main-nav');
  const menuButton = document.querySelector('#menu-toggle');
  function closeMenu() { menu.classList.remove('open'); menuButton.setAttribute('aria-expanded','false'); }
  menuButton.addEventListener('click', () => { const open = menu.classList.toggle('open'); menuButton.setAttribute('aria-expanded',String(open)); });
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
  document.addEventListener('click', e => { if (!e.target.closest('.site-header')) closeMenu(); });
  document.addEventListener('keydown', e => { if(e.key==='Escape'){closeMenu();if(dialog.open)dialog.close();} });

  const dialog = document.querySelector('#site-search');
  const input = document.querySelector('#global-search-input');
  const status = document.querySelector('#search-status');
  const results = document.querySelector('#search-results');
  let searchData, loading, queryVersion=0;
  const openSearch = () => { closeMenu();dialog.showModal();input.focus();if(input.value) search(); };
  document.querySelectorAll('[data-open-search]').forEach(b => b.addEventListener('click', openSearch));
  document.querySelector('[data-close-search]').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', e => { const box = dialog.getBoundingClientRect();if(e.clientX<box.left||e.clientX>box.right||e.clientY<box.top||e.clientY>box.bottom)dialog.close(); });
  async function search() {
    const version = ++queryVersion;
    const query=input.value.trim().toLocaleLowerCase();
    results.replaceChildren();
    if(!query){status.textContent='输入关键词';return;}
    status.textContent='正在搜索…';
    try {
      if(!searchData){
        loading ||= fetch(root+'search-index.json').then(r=>{if(!r.ok)throw new Error('search');return r.json();}).then(data=>{searchData=data;return data;}).catch(e=>{loading=null;throw e;});
        await loading;
      }
      if(version!==queryVersion)return;
      const matches=searchData.filter(p=>(p.title+' '+p.tags.join(' ')+' '+p.content).toLocaleLowerCase().includes(query));
      status.textContent=matches.length ? `${matches.length} 篇相关文章` : '没有找到相关文章';
      for(const post of matches.slice(0,30)) {
        const li=document.createElement('li'),a=document.createElement('a'),h=document.createElement('h3'),p=document.createElement('p');
        a.href=post.url;h.textContent=post.title;p.textContent=post.summary || post.content.slice(0,100);a.append(h,p);li.append(a);results.append(li);
      }
    } catch {if(version===queryVersion)status.textContent='搜索数据暂时不可用，请重试。';}
  }
  input.addEventListener('input',search);

  const grid=document.querySelector('#project-grid');
  if(grid) {
    const cards=[...grid.querySelectorAll('.project-card')];
    const searchInput=document.querySelector('#project-search'),sort=document.querySelector('#project-sort');
    const buttons=[...document.querySelectorAll('[data-category]')].filter(e=>e.tagName==='BUTTON');
    const params=new URLSearchParams(location.search);
    let category=buttons.some(b=>b.dataset.category===params.get('category')) ? params.get('category') : 'all';
    searchInput.value=params.get('q')||'';sort.value=['recent','stars','name'].includes(params.get('sort'))?params.get('sort'):'recent';
    function update() {
      const query=searchInput.value.trim().toLocaleLowerCase();
      buttons.forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.category===category)));
      const ordered=[...cards].sort((a,b)=>sort.value==='stars'?Number(b.dataset.stars)-Number(a.dataset.stars)||a.dataset.name.localeCompare(b.dataset.name):sort.value==='name'?a.dataset.name.localeCompare(b.dataset.name):b.dataset.pushed.localeCompare(a.dataset.pushed));
      let count=0;
      ordered.forEach(card=>{const show=(category==='all'||card.dataset.category===category)&&card.dataset.search.includes(query);card.hidden=!show;if(show)count++;grid.append(card);});
      document.querySelector('#project-count').textContent=`${count} 个项目`;
      document.querySelector('#project-empty').hidden=count>0;
      const url=new URL(location.href);url.search='';if(category!=='all')url.searchParams.set('category',category);if(query)url.searchParams.set('q',query);if(sort.value!=='recent')url.searchParams.set('sort',sort.value);history.replaceState(null,'',url);
    }
    buttons.forEach(b=>b.addEventListener('click',()=>{category=b.dataset.category;update();}));
    searchInput.addEventListener('input',update);sort.addEventListener('change',update);
    document.querySelector('#reset-projects').addEventListener('click',()=>{category='all';searchInput.value='';sort.value='recent';update();searchInput.focus();});
    update();
  }

  const progress=document.querySelector('#reading-progress'),backTop=document.querySelector('#back-top');
  const updateScroll=()=>{const max=doc.scrollHeight-innerHeight;progress.style.width=(max>0?Math.max(0,Math.min(100,scrollY/max*100)):0)+'%';backTop.classList.toggle('visible',scrollY>700);};
  addEventListener('scroll',updateScroll,{passive:true});addEventListener('resize',updateScroll);updateScroll();
  backTop.addEventListener('click',()=>scrollTo({top:0,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'}));
  const copy=document.querySelector('#copy-article');
  if(copy)copy.addEventListener('click',async()=>{try{await navigator.clipboard.writeText(location.href.split('#')[0]);document.querySelector('#copy-status').textContent='已复制';}catch{document.querySelector('#copy-status').textContent='复制失败';}});
  const headings=document.querySelectorAll('.prose h2[id],.prose h3[id]');
  if(headings.length&&'IntersectionObserver' in window){const observer=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting)document.querySelectorAll('.article-toc a').forEach(a=>a.classList.toggle('active',decodeURIComponent(a.hash.slice(1))===e.target.id));});},{rootMargin:'-15% 0px -65% 0px'});headings.forEach(h=>observer.observe(h));}
  document.querySelectorAll('a[href]').forEach(a=>{const url=new URL(a.href,location.href);if(['http:','https:'].includes(url.protocol)&&url.origin!==location.origin){a.target='_blank';a.rel='noopener noreferrer';}});
  document.querySelectorAll('pre').forEach(pre=>{if(pre.closest('.gutter'))return;const button=document.createElement('button');button.className='code-copy';button.type='button';button.textContent='复制';button.title='复制代码';button.addEventListener('click',async()=>{try{await navigator.clipboard.writeText(pre.textContent);button.textContent='已复制';}catch{button.textContent='复制失败';}});pre.parentElement.style.position='relative';pre.parentElement.append(button);});
})();
