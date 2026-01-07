---
title: 页面类型
date: 2025-01-08
type: "docs"
comments: false
---

# 📑 页面类型

Butterfly主题支持多种页面类型，每种类型都有其独特的展示方式和用途。

## 🏠 首页类型

### 默认首页
博客的默认首页会展示所有文章列表，按时间倒序排列。

### 自定义首页
可以创建自定义首页来展示特定内容。

## 📄 独立页面

### 关于页面
```bash
hexo new page about
```

在 `source/about/index.md` 中设置：
```yaml
---
title: 关于我
date: 2025-01-08
type: "about"
---
```

### 友情链接
```bash
hexo new page links
```

配置示例：
```yaml
---
title: 友情链接
date: 2025-01-08
type: "links"
---
```

### 标签页面
```bash
hexo new page tags
```

### 分类页面
```bash
hexo new page categories
```

### 归档页面
```bash
hexo new page archives
```

## 🎨 特殊页面类型

### 图库页面
用于展示图片集合。

### 音乐页面
嵌入音乐播放器。

### 视频页面
展示视频内容。

## 💡 页面配置选项

### Front-matter 配置

```yaml
---
title: 页面标题
date: 2025-01-08
type: "page"  # 页面类型
comments: true  # 是否开启评论
aside: true  # 是否显示侧边栏
---
```

### 常用页面类型

- `page` - 普通页面
- `about` - 关于页面
- `links` - 友链页面
- `tags` - 标签页面
- `categories` - 分类页面
- `archives` - 归档页面
- `music` - 音乐页面
- `docs` - 文档页面

## 🎯 最佳实践

1. **合理使用页面类型** - 根据内容选择合适的页面类型
2. **保持一致性** - 同类页面使用相同的布局和样式
3. **优化导航** - 在导航栏中添加重要页面链接
4. **移动端适配** - 确保所有页面在移动端正常显示
