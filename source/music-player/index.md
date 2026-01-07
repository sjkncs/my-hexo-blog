---
title: 音乐播放器
date: 2025-01-08
type: "music-player"
comments: false
---

# 🎵 音乐播放器

使用 APlayer + MetingJS 提供稳定的音乐播放体验。

## 🎧 许嵩精选歌单

{% meting "308168565" "netease" "playlist" "theme:#667eea" "order:list" "loop:all" "preload:auto" "listmaxheight:400px" %}

---

## 🎼 单曲推荐

### 玫瑰花的葬礼

{% meting "25906124" "netease" "song" "theme:#764ba2" "autoplay:false" %}

### 山水之间

{% meting "25906121" "netease" "song" "theme:#667eea" "autoplay:false" %}

### 清明雨上

{% meting "25906117" "netease" "song" "theme:#f093fb" "autoplay:false" %}

---

## 📝 使用说明

- **播放/暂停**: 点击播放按钮
- **切换歌曲**: 点击播放列表中的歌曲
- **音量调节**: 拖动音量滑块
- **播放模式**: 支持列表循环、单曲循环、随机播放

---

## 💡 特点

- ✅ **稳定播放** - 使用 MetingJS 自动获取音乐资源
- ✅ **歌词显示** - 自动加载并显示歌词
- ✅ **多平台支持** - 支持网易云、QQ音乐、酷狗等
- ✅ **响应式设计** - 完美适配移动端
- ✅ **无需API密钥** - 开箱即用

---

## 🎨 自定义播放器

你也可以在文章中嵌入播放器：

```markdown
# 单曲播放
{% meting "歌曲ID" "netease" "song" %}

# 歌单播放
{% meting "歌单ID" "netease" "playlist" %}

# 专辑播放
{% meting "专辑ID" "netease" "album" %}
```

**支持的平台**:
- `netease` - 网易云音乐
- `tencent` - QQ音乐
- `kugou` - 酷狗音乐
- `xiami` - 虾米音乐
- `baidu` - 百度音乐

---

**🎵 享受音乐，享受生活 🎵**
