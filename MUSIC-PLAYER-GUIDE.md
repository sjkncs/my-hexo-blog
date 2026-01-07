# 🎵 音乐播放器使用指南

本博客集成了两种音乐播放器方案，你可以根据需要选择使用。

## 方案对比

### 方案一：自定义播放器（原版）
- **位置**: `/music/` 和文章内嵌播放器
- **特点**: 
  - ✅ 完全自定义UI设计
  - ✅ 渐变色主题
  - ✅ 手动配置歌词
  - ⚠️ 依赖网易云音乐外链API（可能不稳定）
  - ⚠️ 需要手动配置音频源

### 方案二：APlayer + MetingJS（推荐）
- **位置**: `/music-player/` 和 APlayer版文章
- **特点**:
  - ✅ 自动获取音乐资源
  - ✅ 自动加载歌词和封面
  - ✅ 更稳定可靠
  - ✅ 支持多个音乐平台
  - ✅ 开箱即用，无需API密钥

## 访问方式

### 导航菜单
刷新页面后，在顶部导航栏点击：
```
首页 > 音乐 🎵
  ├── 音乐空间 (自定义播放器)
  └── 音乐播放器 (APlayer)
```

### 直接访问
- **音乐空间**: http://localhost:4000/music/
- **音乐播放器**: http://localhost:4000/music-player/
- **APlayer文章**: http://localhost:4000/2025/01/08/vae-music-aplayer/

## 使用 APlayer（推荐）

### 在文章中嵌入播放器

#### 1. 播放单曲
```markdown
{% meting "歌曲ID" "平台" "song" %}
```

示例：
```markdown
{% meting "25906124" "netease" "song" %}
```

#### 2. 播放歌单
```markdown
{% meting "歌单ID" "平台" "playlist" %}
```

示例：
```markdown
{% meting "2884071814" "netease" "playlist" %}
```

#### 3. 播放专辑
```markdown
{% meting "专辑ID" "平台" "album" %}
```

### 自定义选项

```markdown
{% meting "ID" "平台" "类型" "theme:#颜色" "autoplay:false" "loop:all" %}
```

**可用选项**:
- `theme:#667eea` - 主题颜色
- `autoplay:false` - 是否自动播放
- `loop:all` - 循环模式（all/one/none）
- `order:list` - 播放顺序（list/random）
- `preload:auto` - 预加载（auto/metadata/none）
- `listmaxheight:340px` - 播放列表最大高度

### 支持的音乐平台

| 平台 | 代码 | 说明 |
|------|------|------|
| 网易云音乐 | `netease` | 推荐使用 |
| QQ音乐 | `tencent` | 需要VIP |
| 酷狗音乐 | `kugou` | 部分歌曲 |
| 虾米音乐 | `xiami` | 已停服 |
| 百度音乐 | `baidu` | 资源较少 |

### 获取歌曲/歌单ID

#### 网易云音乐
1. 打开网易云音乐网页版
2. 找到想要的歌曲/歌单
3. 复制URL中的数字ID

示例URL：
- 歌曲: `https://music.163.com/#/song?id=25906124`
- 歌单: `https://music.163.com/#/playlist?id=2884071814`

ID就是 `25906124` 和 `2884071814`

## 配置说明

### APlayer 配置（_config.yml）

```yaml
# APlayer Configuration
aplayer:
  meting: true              # 启用 MetingJS
  asset_inject: true        # 自动注入资源
  externalLink: https://cdn.jsdelivr.net/npm/aplayer@latest/dist/APlayer.min.js
  styleLink: https://cdn.jsdelivr.net/npm/aplayer@latest/dist/APlayer.min.css
  metingLink: https://cdn.jsdelivr.net/npm/meting@2/dist/Meting.min.js
```

## 常见问题

### Q: 音乐无法播放？
**A**: 
1. 检查网络连接
2. 尝试切换到 APlayer 方案
3. 确认歌曲ID是否正确
4. 某些歌曲可能有版权限制

### Q: 如何更换主题颜色？
**A**: 在 meting 标签中添加 `theme:#颜色代码`
```markdown
{% meting "ID" "netease" "song" "theme:#ff6b6b" %}
```

### Q: 如何禁用自动播放？
**A**: 添加 `autoplay:false` 参数
```markdown
{% meting "ID" "netease" "song" "autoplay:false" %}
```

### Q: 播放列表太长怎么办？
**A**: 设置最大高度
```markdown
{% meting "ID" "netease" "playlist" "listmaxheight:300px" %}
```

## 示例代码

### 完整示例
```markdown
---
title: 我的音乐推荐
date: 2025-01-08
tags:
  - 音乐
---

# 🎵 我的音乐推荐

## 单曲推荐

{% meting "25906124" "netease" "song" "theme:#667eea" "autoplay:false" %}

## 我的歌单

{% meting "2884071814" "netease" "playlist" "theme:#764ba2" "order:list" "loop:all" "listmaxheight:400px" %}
```

## 更多资源

- [APlayer 官方文档](https://aplayer.js.org/)
- [MetingJS 文档](https://github.com/metowolf/MetingJS)
- [Hexo-tag-aplayer 插件](https://github.com/MoePlayer/hexo-tag-aplayer)

---

**🎵 享受音乐，享受生活！**
