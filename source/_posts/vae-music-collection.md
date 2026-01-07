---
title: 许嵩音乐精选集
date: 2025-01-07 23:30:00
tags:
  - 音乐
  - 许嵩
  - 歌单
categories:
  - 音乐分享
cover: /img/许嵩.jpg
description: 许嵩经典歌曲推荐 - 玫瑰花的葬礼、山水之间等
---

# 🎵 许嵩音乐精选集

许嵩，中国内地流行乐男歌手、词曲创作人、音乐制作人。以其独特的音乐风格和深刻的歌词内涵深受喜爱。

## 🎧 在线播放器

{% raw %}
<div class="embedded-music-player">
  <div class="player-container">
    <div class="album-display">
      <img src="/img/许嵩.jpg" alt="许嵩专辑" class="album-cover-img">
      <div class="now-playing">
        <h4 id="current-song">玫瑰花的葬礼</h4>
        <p id="current-artist">许嵩</p>
      </div>
    </div>
    
    <div class="lyrics-display">
      <div id="lyrics-scroll" class="lyrics-content">
        <p>点击播放查看歌词...</p>
      </div>
    </div>
    
    <div class="player-progress">
      <span id="time-current">0:00</span>
      <div class="progress-track">
        <div id="progress-bar" class="progress-filled"></div>
      </div>
      <span id="time-total">0:00</span>
    </div>
    
    <div class="player-buttons">
      <button id="btn-prev" class="player-btn">⏮</button>
      <button id="btn-play" class="player-btn btn-main">▶</button>
      <button id="btn-next" class="player-btn">⏭</button>
      <button id="btn-volume" class="player-btn">🔊</button>
    </div>
    
    <audio id="audio-element"></audio>
  </div>
  
  <div class="playlist-display">
    <h4>📻 播放列表</h4>
    <div class="song-items">
      <div class="song-entry active" data-index="0">
        <span class="song-num">01</span>
        <span class="song-name">玫瑰花的葬礼</span>
        <span class="song-time">4:32</span>
      </div>
      <div class="song-entry" data-index="1">
        <span class="song-num">02</span>
        <span class="song-name">山水之间</span>
        <span class="song-time">4:18</span>
      </div>
      <div class="song-entry" data-index="2">
        <span class="song-num">03</span>
        <span class="song-name">清明雨上</span>
        <span class="song-time">5:02</span>
      </div>
      <div class="song-entry" data-index="3">
        <span class="song-num">04</span>
        <span class="song-name">断桥残雪</span>
        <span class="song-time">4:45</span>
      </div>
      <div class="song-entry" data-index="4">
        <span class="song-num">05</span>
        <span class="song-name">庐州月</span>
        <span class="song-time">4:28</span>
      </div>
    </div>
  </div>
</div>
{% endraw %}

<style>
.embedded-music-player {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 20px;
  padding: 30px;
  margin: 30px 0;
  box-shadow: 0 15px 40px rgba(102, 126, 234, 0.3);
}

.player-container {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 15px;
  padding: 25px;
  margin-bottom: 20px;
}

.album-display {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
}

.album-cover-img {
  width: 100px;
  height: 100px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.2);
}

.now-playing h4 {
  margin: 0 0 5px 0;
  font-size: 1.3em;
  color: #333;
}

.now-playing p {
  margin: 0;
  color: #666;
}

.player-progress {
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 20px 0;
}

.progress-track {
  flex: 1;
  height: 6px;
  background: #ddd;
  border-radius: 3px;
  cursor: pointer;
  position: relative;
}

.progress-filled {
  height: 100%;
  background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
  border-radius: 3px;
  width: 0%;
}

.player-buttons {
  display: flex;
  justify-content: center;
  gap: 15px;
}

.player-btn {
  background: #f0f0f0;
  border: none;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  font-size: 1.2em;
  cursor: pointer;
  transition: all 0.3s;
}

.player-btn:hover {
  background: #e0e0e0;
  transform: scale(1.1);
}

.btn-main {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  font-size: 1.5em;
}

.playlist-display {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 15px;
  padding: 20px;
}

.playlist-display h4 {
  margin: 0 0 15px 0;
  color: #333;
}

.song-items {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.song-entry {
  display: flex;
  align-items: center;
  padding: 12px;
  background: #f8f8f8;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s;
}

.song-entry:hover {
  background: #e8e8f8;
  transform: translateX(5px);
}

.song-entry.active {
  background: linear-gradient(135deg, #667eea20 0%, #764ba220 100%);
  border-left: 3px solid #667eea;
}

.song-num {
  width: 40px;
  font-weight: bold;
  color: #667eea;
}

.song-name {
  flex: 1;
  color: #333;
}

.song-time {
  color: #999;
}

.lyrics-display {
  max-height: 200px;
  overflow-y: auto;
  padding: 15px;
  background: #f8f8f8;
  border-radius: 8px;
  margin: 15px 0;
}

.lyrics-content {
  text-align: center;
  line-height: 2;
  color: #666;
  font-size: 0.95em;
  white-space: pre-line;
}

.lyrics-content p {
  margin: 8px 0;
}
</style>

<script>
const songs = [
  { 
    title: '玫瑰花的葬礼', 
    artist: '许嵩', 
    src: 'https://music.163.com/song/media/outer/url?id=25906124.mp3',
    lyrics: `离开你一百个星期\n我回到了这里\n寻找我们爱过的证据\n没有人愿意提起\n玫瑰花它的过去\n今天这里的主题\n我把它叫作 回忆\n我知道 爱情这东西\n他没什么道理\n过去我和你在一起\n是我太叛逆\n现在只剩我自己\n偷偷的想你\n\n玫瑰花的葬礼\n埋葬关于你的回忆\n感觉双手麻痹\n不能自已\n已拉不住你\n真的好美丽\n那天的烟花雨\n我说要娶穿碎花洋裙的你\n玫瑰花的葬礼\n埋葬深深爱着的你\n残朵停止呼吸\n渗入大地\n没人会注意\n一片小雨滴\n陪着我等天明\n我用这最后一分钟怀念你`
  },
  { 
    title: '山水之间', 
    artist: '许嵩', 
    src: 'https://music.163.com/song/media/outer/url?id=25906121.mp3',
    lyrics: `昨夜同门云集 推杯又换盏\n今朝茶凉酒寒 豪言成笑谈\n半生累 尽徒然 碑文完美有谁看\n隐居山水之间 誓与浮名散\n\n湖畔青石板上 一把油纸伞\n旅人停步折花 淋湿了绸缎\n满树玉瓣多傲然 江南烟雨却痴缠\n花飞雨追一如尘缘理还乱\n\n落花雨 你飘摇的美丽\n花香氤 把往日情勾起\n我愿意 化浮萍躺湖心\n只陪你 泛岁月的涟漪`
  },
  { 
    title: '清明雨上', 
    artist: '许嵩', 
    src: 'https://music.163.com/song/media/outer/url?id=25906117.mp3',
    lyrics: `窗外又飘起了雨\n我的思绪飞到了过去\n那时的我们多么甜蜜\n如今却已天各一方`
  },
  { 
    title: '断桥残雪', 
    artist: '许嵩', 
    src: 'https://music.163.com/song/media/outer/url?id=25906118.mp3',
    lyrics: `断桥是否下过雪\n我望着湖面\n水中寒月如雪\n指尖轻点融解`
  },
  { 
    title: '庐州月', 
    artist: '许嵩', 
    src: 'https://music.163.com/song/media/outer/url?id=25906119.mp3',
    lyrics: `庐州月光\n洒在心上\n月下的你\n不复当年模样`
  }
];

let currentIndex = 0;
let isPlaying = false;

const audio = document.getElementById('audio-element');
const playBtn = document.getElementById('btn-play');
const prevBtn = document.getElementById('btn-prev');
const nextBtn = document.getElementById('btn-next');
const progressBar = document.getElementById('progress-bar');
const currentTime = document.getElementById('time-current');
const totalTime = document.getElementById('time-total');
const currentSong = document.getElementById('current-song');
const currentArtist = document.getElementById('current-artist');
const lyricsScroll = document.getElementById('lyrics-scroll');

function loadSong(index) {
  const song = songs[index];
  audio.src = song.src;
  currentSong.textContent = song.title;
  currentArtist.textContent = song.artist;
  
  // 显示歌词
  if (song.lyrics) {
    lyricsScroll.innerHTML = '<p>' + song.lyrics.replace(/\n/g, '</p><p>') + '</p>';
  } else {
    lyricsScroll.innerHTML = '<p>暂无歌词</p>';
  }
  
  document.querySelectorAll('.song-entry').forEach((entry, i) => {
    entry.classList.toggle('active', i === index);
  });
}

function togglePlay() {
  if (isPlaying) {
    audio.pause();
    playBtn.textContent = '▶';
  } else {
    audio.play();
    playBtn.textContent = '⏸';
  }
  isPlaying = !isPlaying;
}

function prevSong() {
  currentIndex = (currentIndex - 1 + songs.length) % songs.length;
  loadSong(currentIndex);
  if (isPlaying) audio.play();
}

function nextSong() {
  currentIndex = (currentIndex + 1) % songs.length;
  loadSong(currentIndex);
  if (isPlaying) audio.play();
}

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

playBtn.addEventListener('click', togglePlay);
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);

audio.addEventListener('timeupdate', () => {
  const percent = (audio.currentTime / audio.duration) * 100;
  progressBar.style.width = `${percent}%`;
  currentTime.textContent = formatTime(audio.currentTime);
});

audio.addEventListener('loadedmetadata', () => {
  totalTime.textContent = formatTime(audio.duration);
});

document.querySelectorAll('.song-entry').forEach((entry, index) => {
  entry.addEventListener('click', () => {
    currentIndex = index;
    loadSong(index);
    audio.play();
    playBtn.textContent = '⏸';
    isPlaying = true;
  });
});

loadSong(0);
</script>

---

## 🌹 玫瑰花的葬礼

**发行时间**: 2006年  
**专辑**: 《自定义》  
**作词/作曲**: 许嵩

### 歌曲简介

《玫瑰花的葬礼》是许嵩的成名作之一，这首歌以其独特的旋律和深情的歌词打动了无数听众。歌曲讲述了一段凄美的爱情故事，用玫瑰花的凋零比喻爱情的逝去。

### 经典歌词

> 你说你不懂为何在这时牵手  
> 我晒干了沉默 悔恨当初的冲动  
> 就算这是做错 也只是怕错过  
> 在一起叫梦 分开了叫痛  

### 音乐特色

- **曲风**: R&B、流行
- **情感**: 忧伤、深情
- **特点**: 旋律优美，歌词意境深远

---

## 🏞️ 山水之间

**发行时间**: 2010年  
**专辑**: 《寻雾启示》  
**作词/作曲**: 许嵩

### 歌曲简介

《山水之间》是一首充满中国风韵味的歌曲，将古典诗词的意境与现代流行音乐完美结合。歌曲描绘了一幅山水画卷，表达了对自然和人生的感悟。

### 经典歌词

> 我站在山水之间  
> 看云卷云舒 花开花谢  
> 人生如梦 转眼百年  
> 何必执着于眼前  

### 音乐特色

- **曲风**: 中国风、古风
- **情感**: 淡然、洒脱
- **特点**: 古典与现代融合，意境悠远

---

## 🎭 其他推荐曲目

### 1. 清明雨上

**专辑**: 《寻雾启示》 (2010)

一首充满古典韵味的歌曲，以清明时节为背景，表达对逝去之人的思念。歌词优美，旋律动人。

**推荐指数**: ⭐⭐⭐⭐⭐

### 2. 断桥残雪

**专辑**: 《自定义》 (2009)

以杭州西湖断桥为背景，讲述了一段凄美的爱情故事。歌曲融合了中国传统文化元素。

**推荐指数**: ⭐⭐⭐⭐⭐

### 3. 庐州月

**专辑**: 《寻雾启示》 (2010)

一首充满思乡之情的歌曲，以庐州（合肥）的月色为意象，表达游子对故乡的思念。

**推荐指数**: ⭐⭐⭐⭐⭐

### 4. 素颜

**专辑**: 《苏格拉没有底》 (2011)

一首温暖治愈的情歌，歌颂真实自然的爱情，不需要华丽的包装。

**推荐指数**: ⭐⭐⭐⭐⭐

### 5. 雅俗共赏

**专辑**: 《苏格拉没有底》 (2011)

一首轻快活泼的歌曲，展现了许嵩幽默风趣的一面。

**推荐指数**: ⭐⭐⭐⭐

---

## 🎼 许嵩音乐风格

### 创作特点

1. **词曲创作**: 许嵩的歌曲大多由自己作词作曲，展现了全面的音乐才华
2. **中国风**: 擅长将中国传统文化元素融入现代流行音乐
3. **歌词深度**: 歌词富有诗意和哲理，引人深思
4. **旋律优美**: 旋律朗朗上口，易于传唱

### 音乐成就

- 多张专辑销量破百万
- 多首歌曲成为KTV必点曲目
- 获得多项音乐奖项
- 拥有庞大的粉丝群体

---

## 💿 专辑推荐

### 《自定义》(2009)
- 玫瑰花的葬礼
- 多余的解释
- 城府

### 《寻雾启示》(2010)
- 清明雨上
- 山水之间
- 庐州月

### 《苏格拉没有底》(2011)
- 素颜
- 雅俗共赏
- 千百度

### 《梦游计》(2012)
- 山水之间（新版）
- 弹指一挥间
- 幻听

---

## 🎧 聆听建议

**最佳聆听时间**: 夜深人静时  
**推荐场景**: 学习、工作、放松、思考  
**情绪搭配**: 适合各种心情，治愈系音乐

---

## 📝 个人感悟

许嵩的音乐陪伴了我的成长，每一首歌都有其独特的魅力。从《玫瑰花的葬礼》的青涩感伤，到《山水之间》的洒脱淡然，再到《素颜》的温暖治愈，他的音乐总能在不同的人生阶段给予我力量和慰藉。

音乐是情感的载体，也是回忆的钥匙。每当听到这些熟悉的旋律，总能想起那些美好的时光。

---

**🎵 愿音乐常伴，岁月静好 🎵**
