# 网站搭建详细指南

本文档提供了从零开始搭建个人博客的详细步骤。

## 📋 前置要求

### 1. 安装 Node.js

**Windows 系统：**

1. 访问 [Node.js 官网](https://nodejs.org/)
2. 下载 LTS（长期支持）版本
3. 运行安装程序，按照提示完成安装
4. 打开命令提示符（CMD）或 PowerShell，验证安装：

```bash
node -v
npm -v
```

**macOS 系统：**

使用 Homebrew 安装：

```bash
brew install node
```

**Linux 系统：**

```bash
# Ubuntu/Debian
sudo apt update
sudo apt install nodejs npm

# CentOS/RHEL
sudo yum install nodejs npm
```

### 2. 安装 Git

**Windows：**
- 访问 [Git 官网](https://git-scm.com/)
- 下载并安装

**macOS：**
```bash
brew install git
```

**Linux：**
```bash
# Ubuntu/Debian
sudo apt install git

# CentOS/RHEL
sudo yum install git
```

## 🚀 项目安装

### 方式一：使用本项目模板

1. **下载项目**

```bash
# 克隆项目
git clone https://github.com/yourusername/my-hexo-blog.git
cd my-hexo-blog

# 或者下载 ZIP 文件并解压
```

2. **安装依赖**

```bash
npm install
```

3. **启动本地服务器**

```bash
npm run server
```

4. **访问网站**

打开浏览器访问：`http://localhost:4000`

### 方式二：从零开始搭建

1. **安装 Hexo CLI**

```bash
npm install -g hexo-cli
```

2. **创建项目**

```bash
hexo init my-blog
cd my-blog
npm install
```

3. **安装 Butterfly 主题**

```bash
npm install hexo-theme-butterfly
```

4. **配置主题**

修改 `_config.yml`：

```yaml
theme: butterfly
```

5. **创建主题配置文件**

创建 `_config.butterfly.yml` 文件，复制本项目的配置内容。

## ⚙️ 个性化配置

### 1. 修改网站信息

编辑 `_config.yml`：

```yaml
# 网站信息
title: 你的网站标题
subtitle: 你的副标题
description: 网站描述
keywords: 关键词1, 关键词2
author: 你的名字
language: zh-CN
timezone: Asia/Shanghai

# URL 设置
url: https://yourdomain.com
```

### 2. 配置导航菜单

编辑 `_config.butterfly.yml`：

```yaml
menu:
  首页: / || fas fa-home
  归档: /archives/ || fas fa-archive
  标签: /tags/ || fas fa-tags
  分类: /categories/ || fas fa-folder-open
  友链: /links/ || fas fa-link
  关于: /about/ || fas fa-heart
```

### 3. 设置头像和社交链接

```yaml
# 头像
avatar:
  img: /img/avatar.jpg
  effect: true

# 社交链接
social:
  fab fa-github: https://github.com/yourusername || GitHub
  fab fa-zhihu: https://www.zhihu.com/people/yourusername || 知乎
  fas fa-envelope: mailto:your.email@example.com || Email
```

### 4. 添加图片资源

将你的图片放在 `source/img/` 目录下：

- `avatar.jpg` - 头像
- `bg.jpg` - 背景图
- `cover1.jpg`, `cover2.jpg`, `cover3.jpg` - 文章封面

## 📝 内容创建

### 创建文章

```bash
hexo new "文章标题"
```

这会在 `source/_posts/` 目录创建一个新的 Markdown 文件。

### 文章格式

```markdown
---
title: 文章标题
date: 2025-01-07 10:00:00
tags:
  - 标签1
  - 标签2
categories:
  - 分类名称
cover: /img/cover.jpg
description: 文章简介
---

文章内容...
```

### 创建页面

```bash
# 创建关于页面
hexo new page "about"

# 创建友链页面
hexo new page "links"

# 创建标签页面
hexo new page "tags"

# 创建分类页面
hexo new page "categories"
```

## 🌐 部署到线上

### 部署到 GitHub Pages

1. **创建 GitHub 仓库**

在 GitHub 创建一个名为 `yourusername.github.io` 的仓库。

2. **安装部署插件**

```bash
npm install hexo-deployer-git --save
```

3. **配置部署**

编辑 `_config.yml`：

```yaml
deploy:
  type: git
  repo: https://github.com/yourusername/yourusername.github.io.git
  branch: main
```

4. **部署**

```bash
hexo clean
hexo generate
hexo deploy
```

5. **访问网站**

访问：`https://yourusername.github.io`

### 部署到 Netlify

1. **推送代码到 GitHub**

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/my-blog.git
git push -u origin main
```

2. **在 Netlify 部署**

- 访问 [Netlify](https://www.netlify.com/)
- 点击 "New site from Git"
- 选择你的 GitHub 仓库
- 构建命令：`npm run build`
- 发布目录：`public`
- 点击 "Deploy site"

3. **自定义域名（可选）**

在 Netlify 设置中配置自定义域名。

### 部署到 Vercel

1. **推送代码到 GitHub**（同上）

2. **在 Vercel 部署**

- 访问 [Vercel](https://vercel.com/)
- 点击 "New Project"
- 导入 GitHub 仓库
- Vercel 会自动检测 Hexo 项目
- 点击 "Deploy"

## 🔧 常见问题

### 1. 端口被占用

如果 4000 端口被占用，可以使用其他端口：

```bash
hexo server -p 5000
```

### 2. 主题不生效

确保 `_config.yml` 中的主题名称正确：

```yaml
theme: butterfly
```

然后清理缓存：

```bash
hexo clean
hexo generate
```

### 3. 图片不显示

- 确保图片路径正确
- 图片应放在 `source/img/` 目录
- 在文章中使用 `/img/图片名.jpg` 引用

### 4. 部署后样式丢失

检查 `_config.yml` 中的 URL 配置：

```yaml
url: https://yourdomain.com
root: /
```

## 📚 进阶配置

### 启用评论系统

在 `_config.butterfly.yml` 中配置评论系统（如 Gitalk、Valine 等）。

### 启用搜索功能

```bash
npm install hexo-generator-search --save
```

在主题配置中启用本地搜索。

### 启用数学公式

在 `_config.butterfly.yml` 中启用 MathJax 或 KaTeX。

### 性能优化

- 启用图片懒加载
- 压缩 HTML、CSS、JS
- 使用 CDN 加速

## 🎯 下一步

- 阅读 [Hexo 官方文档](https://hexo.io/zh-cn/docs/)
- 阅读 [Butterfly 主题文档](https://butterfly.js.org/)
- 探索更多主题配置选项
- 开始创作你的第一篇文章！

## 💡 提示

- 定期备份你的博客源文件
- 使用 Git 管理你的博客源码
- 在本地测试后再部署到线上
- 保持 Hexo 和主题的更新

---

如有问题，欢迎提交 Issue 或联系作者！
