---
title: 首页音乐推荐
---

<div class="home-music-section">
  <h2>🎵 音乐推荐</h2>
  
  <div class="music-cards">
    <div class="music-card">
      <div class="music-card-icon">🎧</div>
      <h3>许嵩音乐精选</h3>
      <p>经典歌曲推荐 - 玫瑰花的葬礼、山水之间等</p>
      <a href="/music-player/" class="music-btn">立即播放</a>
    </div>
    
    <div class="music-card">
      <div class="music-card-icon">💿</div>
      <h3>音乐空间</h3>
      <p>自定义播放器，支持在线播放和歌词显示</p>
      <a href="/music/" class="music-btn">进入空间</a>
    </div>
    
    <div class="music-card">
      <div class="music-card-icon">📝</div>
      <h3>音乐文章</h3>
      <p>查看更多音乐推荐和评论文章</p>
      <a href="/2025/01/08/vae-music-aplayer/" class="music-btn">阅读文章</a>
    </div>
  </div>
</div>

<style>
.home-music-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 20px;
  padding: 40px;
  margin: 40px 0;
  color: white;
}

.home-music-section h2 {
  text-align: center;
  font-size: 2em;
  margin-bottom: 30px;
  color: white;
}

.music-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
}

.music-card {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 15px;
  padding: 30px;
  text-align: center;
  transition: all 0.3s;
  color: #333;
}

.music-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
}

.music-card-icon {
  font-size: 3em;
  margin-bottom: 15px;
}

.music-card h3 {
  color: #667eea;
  margin: 15px 0;
  font-size: 1.4em;
}

.music-card p {
  color: #666;
  line-height: 1.6;
  margin-bottom: 20px;
}

.music-btn {
  display: inline-block;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 12px 30px;
  border-radius: 25px;
  text-decoration: none;
  transition: all 0.3s;
  font-weight: bold;
}

.music-btn:hover {
  transform: scale(1.05);
  box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
}

@media (max-width: 768px) {
  .music-cards {
    grid-template-columns: 1fr;
  }
  
  .home-music-section {
    padding: 30px 20px;
  }
}
</style>
