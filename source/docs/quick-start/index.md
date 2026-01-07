---
title: 快速开始
date: 2025-01-08
type: "docs"
comments: false
---

<div class="docs-container">

# 🚀 快速开始

欢迎来到Hexo + Butterfly主题快速入门指南！本教程将帮助你快速搭建一个美观的个人博客。

<div class="timeline-container">

## 📦 环境准备

<div class="step-card">

### Step 1: 安装 Node.js

Node.js 是运行 Hexo 的基础环境。

**下载地址**: [https://nodejs.org/](https://nodejs.org/)

```bash
# 验证安装
node -v
npm -v
```

**推荐版本**: Node.js 14.0 或更高版本

</div>

<div class="step-card">

### Step 2: 安装 Git

Git 用于版本控制和部署。

**下载地址**: [https://git-scm.com/](https://git-scm.com/)

```bash
# 验证安装
git --version
```

</div>

<div class="step-card">

### Step 3: 安装 Hexo

```bash
# 全局安装 Hexo CLI
npm install -g hexo-cli

# 验证安装
hexo -v
```

</div>

</div>

---

## 🎨 创建博客

<div class="code-showcase">

```bash
# 1. 初始化博客
hexo init my-blog
cd my-blog

# 2. 安装依赖
npm install

# 3. 启动本地服务器
hexo server
```

</div>

访问 `http://localhost:4000` 查看你的博客！

---

## 🦋 安装 Butterfly 主题

<div class="theme-install-steps">

### 方法一：Git 克隆（推荐）

```bash
cd my-blog
git clone -b master https://github.com/jerryc127/hexo-theme-butterfly.git themes/butterfly
```

### 方法二：npm 安装

```bash
npm install hexo-theme-butterfly
```

### 配置主题

编辑根目录的 `_config.yml`：

```yaml
# 修改主题配置
theme: butterfly
```

### 安装依赖插件

```bash
npm install hexo-renderer-pug hexo-renderer-stylus --save
```

</div>

---

## ⚙️ 基础配置

<div class="config-section">

### 网站信息配置

编辑 `_config.yml`：

```yaml
# Site
title: 你的博客名称
subtitle: '副标题'
description: '网站描述'
keywords: 关键词1, 关键词2
author: 你的名字
language: zh-CN
timezone: 'Asia/Shanghai'
```

### URL 配置

```yaml
# URL
url: http://yoursite.com
permalink: :year/:month/:day/:title/
```

</div>

---

## 📝 创建第一篇文章

<div class="article-creation">

```bash
# 创建新文章
hexo new "我的第一篇文章"

# 文章位于 source/_posts/我的第一篇文章.md
```

### 文章格式

```markdown
---
title: 我的第一篇文章
date: 2025-01-08 10:00:00
tags:
  - 标签1
  - 标签2
categories:
  - 分类名称
cover: /img/cover.jpg
---

这里是文章内容...
```

</div>

---

## 🚀 生成和部署

<div class="deploy-section">

### 生成静态文件

```bash
# 清理缓存
hexo clean

# 生成静态文件
hexo generate
# 或简写
hexo g
```

### 本地预览

```bash
hexo server
# 或简写
hexo s
```

### 部署到 GitHub Pages

1. 安装部署插件：

```bash
npm install hexo-deployer-git --save
```

2. 配置 `_config.yml`：

```yaml
deploy:
  type: git
  repo: https://github.com/yourusername/yourusername.github.io.git
  branch: main
```

3. 部署：

```bash
hexo deploy
# 或简写
hexo d

# 或一键生成并部署
hexo g -d
```

</div>

---

## 🎯 常用命令

<div class="command-reference">

| 命令 | 说明 |
|------|------|
| `hexo init` | 初始化博客 |
| `hexo new "title"` | 创建新文章 |
| `hexo generate` | 生成静态文件 |
| `hexo server` | 启动本地服务器 |
| `hexo deploy` | 部署网站 |
| `hexo clean` | 清理缓存 |
| `hexo g -d` | 生成并部署 |

</div>

---

## 📚 下一步

<div class="next-steps">

- 📖 [主题配置](/docs/theme-config/) - 详细的主题配置说明
- 🎨 [页面创建](/docs/pages/) - 创建各种页面
- 🔧 [插件推荐](/docs/plugins/) - 实用插件推荐
- 💡 [常见问题](/docs/faq/) - 疑难解答

</div>

---

<div class="help-section">

## 💬 需要帮助？

- 📘 [Hexo 官方文档](https://hexo.io/zh-cn/docs/)
- 🦋 [Butterfly 主题文档](https://butterfly.js.org/)
- 💬 [GitHub Issues](https://github.com/jerryc127/hexo-theme-butterfly/issues)

</div>

</div>

<style>
.docs-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
}

.step-card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 25px;
  border-radius: 15px;
  margin: 20px 0;
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
  transition: transform 0.3s ease;
}

.step-card:hover {
  transform: translateY(-5px);
}

.code-showcase {
  background: #1e1e1e;
  border-radius: 10px;
  padding: 20px;
  margin: 20px 0;
}

.theme-install-steps {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  padding: 30px;
  border-radius: 15px;
  color: white;
  margin: 20px 0;
}

.config-section {
  background: #f8f9fa;
  padding: 25px;
  border-radius: 10px;
  border-left: 4px solid #667eea;
  margin: 20px 0;
}

.article-creation {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  padding: 25px;
  border-radius: 15px;
  color: white;
  margin: 20px 0;
}

.deploy-section {
  background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
  padding: 25px;
  border-radius: 15px;
  margin: 20px 0;
}

.command-reference {
  margin: 20px 0;
}

.command-reference table {
  width: 100%;
  border-collapse: collapse;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  border-radius: 10px;
  overflow: hidden;
}

.command-reference th {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 15px;
  text-align: left;
}

.command-reference td {
  padding: 12px 15px;
  border-bottom: 1px solid #eee;
}

.next-steps {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  margin: 20px 0;
}

.next-steps a {
  background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
  padding: 20px;
  border-radius: 10px;
  text-decoration: none;
  color: #333;
  transition: transform 0.3s ease;
  display: block;
}

.next-steps a:hover {
  transform: scale(1.05);
}

.help-section {
  background: #fff3cd;
  padding: 20px;
  border-radius: 10px;
  border-left: 4px solid #ffc107;
  margin: 20px 0;
}
</style>
