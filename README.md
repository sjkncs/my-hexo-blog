# 🌐 Yangting SONG's Personal Website

[![Deploy Status](https://github.com/sjkncs/my-hexo-blog/actions/workflows/deploy.yml/badge.svg)](https://github.com/sjkncs/my-hexo-blog/actions)
[![Website](https://img.shields.io/website?url=https%3A%2F%2Fyunyunfanfan.top)](https://yunyunfanfan.top)

> 🎵 个人博客 + 音乐空间 | Hexo + Butterfly主题

## 🌟 网站地址

**主站**: [https://yunyunfanfan.top](https://yunyunfanfan.top)

## ✨ 特色功能

- 🎨 **精美UI设计** - 渐变背景 + 玻璃态效果
- 🎵 **音乐播放器** - APlayer + MetingJS，支持网易云音乐
- 📊 **GitHub统计** - 实时展示项目数据
- 📱 **响应式设计** - 完美适配移动端
- 🚀 **自动部署** - GitHub Actions自动化部署
- 🔒 **HTTPS** - 全站HTTPS加密

## 🛠️ 技术栈

- **框架**: Hexo 5.5.3
- **主题**: Butterfly
- **音乐**: APlayer + MetingJS
- **部署**: GitHub Pages
- **CI/CD**: GitHub Actions

## 📦 本地开发

### 安装依赖

```bash
npm install
```

### 本地预览

```bash
npx hexo server
# 访问 http://localhost:4000
```

### 生成静态文件

```bash
npx hexo generate
```

### 清理缓存

```bash
npx hexo clean
```

## 🚀 快速部署

### 方法一：使用部署脚本（推荐）

```powershell
.\deploy.ps1
```

### 方法二：手动部署

```bash
# 1. 生成静态文件
npx hexo generate

# 2. 提交到Git
git add .
git commit -m "Update blog"
git push origin main
```

## 📁 项目结构

```
my-hexo-blog/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions配置
├── source/
│   ├── _posts/                 # 文章目录
│   ├── about/                  # 关于页面
│   ├── music/                  # 音乐空间
│   ├── music-player/           # 音乐播放器
│   ├── img/                    # 图片资源
│   ├── css/                    # 自定义样式
│   └── CNAME                   # 自定义域名
├── themes/
│   └── butterfly/              # Butterfly主题
├── _config.yml                 # Hexo配置
├── _config.butterfly.yml       # 主题配置
├── deploy.ps1                  # 部署脚本
├── DEPLOYMENT-GUIDE.md         # 部署指南
└── README.md                   # 本文件
```

## 🎵 音乐功能

### 音乐空间
- 📍 访问：[/music/](https://yunyunfanfan.top/music/)
- 🎧 许嵩精选歌单
- 🌍 欧美音乐精选
- ✨ GIF动图装饰

### 音乐播放器
- 📍 访问：[/music-player/](https://yunyunfanfan.top/music-player/)
- 🎵 网易云音乐集成
- 📝 歌词同步显示
- 🎨 精美UI设计

## 📝 内容管理

### 创建新文章

```bash
npx hexo new "文章标题"
```

### 文章Front-matter示例

```yaml
---
title: 文章标题
date: 2025-01-08
tags:
  - 标签1
  - 标签2
categories:
  - 分类名
cover: /img/cover.jpg
---
```

## 🎨 自定义样式

自定义CSS文件位于：`source/css/custom.css`

包含：
- 全局背景渐变
- 卡片悬停效果
- 按钮渐变
- 滚动条美化
- 响应式布局

## 📊 SEO优化

- ✅ 自定义meta标签
- ✅ sitemap.xml
- ✅ robots.txt
- ✅ 语义化HTML
- ✅ 图片alt属性

## 🔧 配置说明

### 网站基本信息

编辑 `_config.yml`:

```yaml
title: 你的网站标题
subtitle: 副标题
description: 网站描述
author: 作者名
url: https://your-domain.com
```

### 主题配置

编辑 `_config.butterfly.yml`:

```yaml
menu:
  首页: / || fas fa-home
  音乐: /music/ || fas fa-music
  关于: /about/ || fas fa-heart
```

## 🌐 域名配置

### DNS设置（阿里云示例）

```
类型: A
主机记录: @
记录值: 185.199.108.153

类型: A
主机记录: @
记录值: 185.199.109.153

类型: A
主机记录: @
记录值: 185.199.110.153

类型: A
主机记录: @
记录值: 185.199.111.153
```

详细配置请参考：[DEPLOYMENT-GUIDE.md](./DEPLOYMENT-GUIDE.md)

## 📈 性能优化

- ✅ 图片懒加载
- ✅ CSS/JS压缩
- ✅ CDN加速
- ✅ 浏览器缓存
- ✅ Gzip压缩

## 🐛 常见问题

### 1. 样式丢失
确保 `_config.yml` 中的 `url` 和 `root` 配置正确

### 2. 图片无法显示
检查图片路径，确保在 `source/img/` 目录下

### 3. 音乐播放器不工作
检查APlayer配置，确保网络连接正常

### 4. 部署失败
查看GitHub Actions日志，检查构建错误

## 📞 联系方式

- 📧 Email: 2797660051@qq.com
- 🐙 GitHub: [@sjkncs](https://github.com/sjkncs)
- 🌐 Website: [yunyunfanfan.top](https://yunyunfanfan.top)

## 📄 License

MIT License

---

**Made with ❤️ by Yangting SONG**

🎵 Enjoy the music, enjoy the code!
