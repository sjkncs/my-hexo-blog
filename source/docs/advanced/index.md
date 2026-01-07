---
title: 性能优化
date: 2025-01-08
type: "docs"
comments: false
---

# 🛠️ 性能优化指南

提升Hexo博客的加载速度和性能表现。

## 🚀 图片优化

### 图片压缩

使用工具压缩图片：
- [TinyPNG](https://tinypng.com/)
- [ImageOptim](https://imageoptim.com/)
- [Squoosh](https://squoosh.app/)

### 图片懒加载

在主题配置中启用：
```yaml
lazyload:
  enable: true
  placeholder: /img/loading.gif
```

### WebP格式

转换图片为WebP格式以减小文件大小：
```bash
npm install imagemin-webp --save
```

## 📦 资源压缩

### HTML压缩

安装插件：
```bash
npm install hexo-html-minifier --save
```

配置：
```yaml
html_minifier:
  enable: true
  exclude:
```

### CSS压缩

```bash
npm install hexo-clean-css --save
```

### JS压缩

```bash
npm install hexo-uglify --save
```

## 🌐 CDN加速

### 使用CDN

在主题配置中设置CDN：
```yaml
CDN:
  css:
    - https://cdn.jsdelivr.net/npm/hexo-theme-butterfly/source/css/index.css
  js:
    - https://cdn.jsdelivr.net/npm/hexo-theme-butterfly/source/js/main.js
```

### 常用CDN服务

- **jsDelivr**: 免费、快速
- **Cloudflare**: 全球CDN
- **七牛云**: 国内访问快

## ⚡ 缓存优化

### 浏览器缓存

配置服务器缓存头：
```nginx
location ~* \.(jpg|jpeg|png|gif|ico|css|js)$ {
  expires 1y;
  add_header Cache-Control "public, immutable";
}
```

### Service Worker

启用PWA功能：
```bash
npm install hexo-offline --save
```

## 🔧 代码优化

### 减少HTTP请求

- 合并CSS文件
- 合并JS文件
- 使用CSS Sprites

### 异步加载

```html
<script async src="script.js"></script>
<script defer src="script.js"></script>
```

### 预加载关键资源

```html
<link rel="preload" href="font.woff2" as="font" type="font/woff2" crossorigin>
```

## 📊 性能监控

### 使用工具

- **Google PageSpeed Insights**
- **GTmetrix**
- **WebPageTest**
- **Lighthouse**

### 关键指标

- **FCP**: First Contentful Paint
- **LCP**: Largest Contentful Paint
- **TTI**: Time to Interactive
- **CLS**: Cumulative Layout Shift

## 🎯 优化建议

### 1. 减少文件大小

- 压缩图片
- 压缩代码
- 移除未使用的CSS/JS

### 2. 优化加载顺序

- 关键CSS内联
- 延迟加载非关键资源
- 使用字体显示策略

### 3. 服务器优化

- 启用Gzip压缩
- 使用HTTP/2
- 配置缓存策略

### 4. 数据库优化

- 清理无用数据
- 优化查询
- 使用缓存

## 📈 性能检查清单

- [ ] 图片已压缩
- [ ] 启用懒加载
- [ ] CSS/JS已压缩
- [ ] 使用CDN
- [ ] 启用浏览器缓存
- [ ] 减少HTTP请求
- [ ] 优化字体加载
- [ ] 移除未使用代码
- [ ] 启用Gzip
- [ ] 使用HTTP/2

## 🔍 实战案例

### 优化前后对比

| 指标 | 优化前 | 优化后 | 提升 |
|------|--------|--------|------|
| 页面大小 | 2.5MB | 800KB | 68% |
| 加载时间 | 5.2s | 1.8s | 65% |
| 请求数 | 45 | 18 | 60% |
| 性能评分 | 62 | 95 | 53% |
