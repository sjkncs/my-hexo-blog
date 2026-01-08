// 首页标题打字机效果
function initTypingEffect() {
  // 检查是否在首页
  const isHomePage = window.location.pathname === '/my-hexo-blog/' || 
                     window.location.pathname === '/my-hexo-blog/index.html' ||
                     window.location.pathname === '/my-hexo-blog';
  
  if (!isHomePage) return;
  
  // 等待页面完全加载
  setTimeout(function() {
    // 查找Butterfly主题的标题元素
    const titleElement = document.querySelector('#site-title') || 
                        document.querySelector('.site-title') ||
                        document.querySelector('.site-name');
    const subtitleElement = document.querySelector('#site-subtitle') || 
                           document.querySelector('.site-subtitle');
    
    if (titleElement) {
      const title = 'Yangting SONG';
      const subtitle = 'Code with passion, create with purpose';
      
      titleElement.textContent = '';
      if (subtitleElement) subtitleElement.textContent = '';
      
      let titleIndex = 0;
      let subtitleIndex = 0;
      
      // 打字机效果函数
      function typeTitle() {
        if (titleIndex < title.length) {
          titleElement.textContent += title.charAt(titleIndex);
          titleIndex++;
          setTimeout(typeTitle, 150);
        } else {
          // 标题打完后开始打副标题
          setTimeout(typeSubtitle, 500);
        }
      }
      
      function typeSubtitle() {
        if (subtitleElement && subtitleIndex < subtitle.length) {
          subtitleElement.textContent += subtitle.charAt(subtitleIndex);
          subtitleIndex++;
          setTimeout(typeSubtitle, 100);
        }
      }
      
      // 延迟800ms后开始打字
      setTimeout(typeTitle, 800);
    }
  }, 1000);
}

// 页面加载完成后执行
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initTypingEffect);
} else {
  initTypingEffect();
}
