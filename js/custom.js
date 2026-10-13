document.addEventListener('DOMContentLoaded', () => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', event => {
      const hash = anchor.getAttribute('href').slice(1);
      if (!hash) return;
      let target;
      try { target = document.getElementById(decodeURIComponent(hash)); } catch { return; }
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({behavior: reduceMotion ? 'auto' : 'smooth', block: 'start'});
      history.replaceState(null, '', '#' + hash);
    });
  });

  if (document.querySelector('#article-container')) {
    const bar = document.createElement('div');
    bar.id = 'reading-progress';
    bar.setAttribute('aria-hidden', 'true');
    document.body.appendChild(bar);
    const update = () => {
      const available = document.documentElement.scrollHeight - window.innerHeight;
      const progress = available > 0 ? Math.min(100, Math.max(0, window.scrollY / available * 100)) : 0;
      bar.style.width = progress + '%';
    };
    window.addEventListener('scroll', update, {passive: true});
    window.addEventListener('resize', update);
    update();
  }

  document.querySelectorAll('a[href]').forEach(link => {
    const url = new URL(link.href, window.location.href);
    if (['http:', 'https:'].includes(url.protocol) && url.origin !== window.location.origin) {
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
    }
  });
});
