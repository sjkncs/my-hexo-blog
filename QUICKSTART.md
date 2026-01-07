# 快速开始指南 🚀

5 分钟快速启动你的个人博客！

## 第一步：安装依赖

确保你已经安装了 Node.js（建议 v14 或更高版本）。

```bash
# 进入项目目录
cd my-hexo-blog

# 安装依赖
npm install
```

## 第二步：本地预览

```bash
# 启动本地服务器
npm run server
```

打开浏览器访问：`http://localhost:4000`

## 第三步：个性化配置

### 修改网站信息

编辑 `_config.yml` 文件：

```yaml
title: 你的网站名称
subtitle: 你的副标题
description: 网站描述
author: 你的名字
```

### 修改主题配置

编辑 `_config.butterfly.yml` 文件：

```yaml
# 修改头像
avatar:
  img: /img/avatar.jpg

# 修改社交链接
social:
  fab fa-github: https://github.com/你的用户名 || GitHub
  fas fa-envelope: mailto:你的邮箱 || Email
```

## 第四步：创建内容

### 创建新文章

```bash
hexo new "我的第一篇文章"
```

文章会创建在 `source/_posts/` 目录下，使用 Markdown 格式编写。

### 文章示例

```markdown
---
title: 我的第一篇文章
date: 2025-01-07 10:00:00
tags:
  - 测试
categories:
  - 博客
---

这是我的第一篇文章内容！
```

## 第五步：生成和部署

### 生成静态文件

```bash
npm run build
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
  repo: https://github.com/你的用户名/你的用户名.github.io.git
  branch: main
```

3. 部署：

```bash
npm run deploy
```

## 常用命令

```bash
# 清理缓存
npm run clean

# 生成静态文件
npm run build

# 启动本地服务器
npm run server

# 部署到服务器
npm run deploy

# 创建新文章
hexo new "文章标题"

# 创建新页面
hexo new page "页面名称"
```

## 目录结构

```
my-hexo-blog/
├── _config.yml              # Hexo 配置
├── _config.butterfly.yml    # 主题配置
├── source/                  # 源文件
│   ├── _posts/             # 文章目录
│   ├── about/              # 关于页面
│   ├── links/              # 友链页面
│   └── img/                # 图片资源
└── themes/                  # 主题目录
```

## 下一步

- 📖 阅读 [完整设置指南](SETUP.md)
- 🎨 自定义样式和脚本
- 📝 开始写作你的第一篇文章
- 🌐 部署到线上

## 需要帮助？

- 查看 [Hexo 文档](https://hexo.io/zh-cn/docs/)
- 查看 [Butterfly 主题文档](https://butterfly.js.org/)
- 提交 [Issue](https://github.com/yourusername/my-hexo-blog/issues)

---

祝你使用愉快！🎉
