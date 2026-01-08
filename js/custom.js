// Custom JavaScript for Butterfly Theme

document.addEventListener('DOMContentLoaded', function() {
  
  // Add fade-in animation to elements
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in-up');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all doc cards
  document.querySelectorAll('.doc-card').forEach(card => {
    observer.observe(card);
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Add copy button to code blocks
  const codeBlocks = document.querySelectorAll('pre code');
  codeBlocks.forEach(block => {
    const button = document.createElement('button');
    button.className = 'copy-code-btn';
    button.textContent = '复制';
    button.addEventListener('click', () => {
      navigator.clipboard.writeText(block.textContent).then(() => {
        button.textContent = '已复制!';
        setTimeout(() => {
          button.textContent = '复制';
        }, 2000);
      });
    });
    block.parentElement.style.position = 'relative';
    block.parentElement.appendChild(button);
  });

  // Reading progress bar
  const createProgressBar = () => {
    const progressBar = document.createElement('div');
    progressBar.id = 'reading-progress';
    progressBar.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 0%;
      height: 3px;
      background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
      z-index: 9999;
      transition: width 0.2s ease;
    `;
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const progress = (scrollTop / (documentHeight - windowHeight)) * 100;
      progressBar.style.width = progress + '%';
    });
  };

  // Initialize reading progress bar
  if (document.querySelector('.post-content')) {
    createProgressBar();
  }

  // Back to top button enhancement
  const backToTopBtn = document.querySelector('#go-up');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // Console welcome message
  console.log('%cYangting SONG 🎯', 'color: #49b1f5; font-size: 24px; font-weight: bold;');
  console.log('%cAI-Driven · Web Development · Quantitative Trading', 'color: #667eea; font-size: 16px;');
  console.log('%c欢迎来到我的技术空间！', 'color: #764ba2; font-size: 14px;');

  // 首页标题打字机效果
  initTypingEffect();

  // 音乐播放器初始化
  setTimeout(() => {
    initMusicPlayer();
  }, 1000);

});

// 音乐播放器控制
function initMusicPlayer() {
  // 等待APlayer加载
  if (typeof APlayer === 'undefined') {
    console.log('APlayer未加载，等待中...');
    setTimeout(initMusicPlayer, 500);
    return;
  }

  // 添加音乐控制按钮
  const musicBtn = document.createElement('div');
  musicBtn.className = 'music-toggle-btn';
  musicBtn.innerHTML = '<i class="fas fa-music"></i>';
  musicBtn.title = '背景音乐';
  
  // 点击切换播放状态
  musicBtn.addEventListener('click', function() {
    const aplayer = document.querySelector('.aplayer');
    if (aplayer) {
      const aplayerInstance = aplayer.aplayer;
      if (aplayerInstance) {
        if (aplayerInstance.audio.paused) {
          aplayerInstance.play();
          musicBtn.classList.add('playing');
        } else {
          aplayerInstance.pause();
          musicBtn.classList.remove('playing');
        }
      }
    }
  });
  
  document.body.appendChild(musicBtn);
  
  console.log('🎵 音乐播放器已加载');
}

// External link handling
document.addEventListener('click', function(e) {
  const link = e.target.closest('a');
  if (link && link.hostname !== window.location.hostname) {
    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noopener noreferrer');
  }
});

// Image lazy loading fallback
if ('loading' in HTMLImageElement.prototype) {
  const images = document.querySelectorAll('img[loading="lazy"]');
  images.forEach(img => {
    img.src = img.dataset.src || img.src;
  });
} else {
  // Fallback for browsers that don't support lazy loading
  const script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/npm/vanilla-lazyload@17.8.3/dist/lazyload.min.js';
  document.body.appendChild(script);
}

// 首页标题打字机效果
function initTypingEffect() {
  // 只在首页执行
  const isHomePage = window.location.pathname === '/my-hexo-blog/' || 
                     window.location.pathname === '/my-hexo-blog/index.html' ||
                     window.location.pathname === '/my-hexo-blog';
  
  if (!isHomePage) return;
  
  // 延迟执行，等待页面元素加载
  setTimeout(function() {
    // 查找标题元素 - Butterfly主题的标题在 #site-info 中
    const siteInfo = document.querySelector('#site-info');
    if (!siteInfo) return;
    
    const titleElement = siteInfo.querySelector('.site-title') || 
                        siteInfo.querySelector('h1') ||
                        siteInfo.querySelector('.site-name');
    const subtitleElement = siteInfo.querySelector('.site-subtitle') || 
                           siteInfo.querySelector('p');
    
    if (titleElement) {
      const originalTitle = titleElement.textContent;
      const title = 'Yangting SONG';
      const subtitle = 'Code with passion, create with purpose';
      
      // 清空内容
      titleElement.textContent = '';
      if (subtitleElement) subtitleElement.textContent = '';
      
      let titleIndex = 0;
      let subtitleIndex = 0;
      
      // 打字机效果函数
      function typeTitle() {
        if (titleIndex < title.length) {
          titleElement.textContent += title.charAt(titleIndex);
          titleIndex++;
          setTimeout(typeTitle, 120);
        } else {
          // 标题打完后开始打副标题
          setTimeout(typeSubtitle, 400);
        }
      }
      
      function typeSubtitle() {
        if (subtitleElement && subtitleIndex < subtitle.length) {
          subtitleElement.textContent += subtitle.charAt(subtitleIndex);
          subtitleIndex++;
          setTimeout(typeSubtitle, 80);
        }
      }
      
      // 开始打字
      setTimeout(typeTitle, 600);
    }
  }, 800);
}
