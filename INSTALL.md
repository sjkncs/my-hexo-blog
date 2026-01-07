# 安装说明 📦

## 🎯 项目概述

这是一个基于 **Hexo 7.3.0** 和 **Butterfly 5.4.3** 主题的个人博客项目，参照 yunyunfanfan.top 的文档中心架构设计。

## ✨ 项目特点

- 📚 **完整的文档中心** - 包含快速开始、主题页面、标签外挂、常见问题、高级配置等完整文档
- 🎨 **现代化设计** - 美观的界面和流畅的用户体验
- 📱 **响应式布局** - 完美适配各种设备
- 🌙 **暗黑模式** - 支持明暗主题切换
- 🔍 **本地搜索** - 快速查找文章内容
- ⚡ **性能优化** - 图片懒加载、代码高亮等优化

## 📂 项目结构

```
my-hexo-blog/
├── _config.yml                    # Hexo 主配置文件
├── _config.butterfly.yml          # Butterfly 主题配置
├── package.json                   # 项目依赖
├── README.md                      # 项目说明
├── SETUP.md                       # 详细设置指南
├── QUICKSTART.md                  # 快速开始指南
├── .gitignore                     # Git 忽略文件
│
├── scaffolds/                     # 文章模板
│   ├── post.md                   # 文章模板
│   ├── page.md                   # 页面模板
│   └── draft.md                  # 草稿模板
│
└── source/                        # 源文件目录
    ├── _posts/                   # 博客文章
    │   ├── welcome.md           # 欢迎文章
    │   ├── hexo-butterfly-guide.md  # Hexo 教程
    │   ├── first-travel.md      # 游记示例
    │   ├── spring-outing.md     # 游记示例
    │   ├── mountain-climbing.md # 游记示例
    │   ├── spring-scenery.md    # 游记示例
    │   └── love-poem.md         # 随笔示例
    │
    ├── about/                    # 关于页面
    │   └── index.md
    │
    ├── links/                    # 友情链接页面
    │   └── index.md
    │
    ├── tags/                     # 标签页面
    │   └── index.md
    │
    ├── categories/               # 分类页面
    │   └── index.md
    │
    ├── docs/                     # 文档中心
    │   ├── index.md             # 文档首页
    │   └── quick-start/         # 快速开始文档
    │       ├── theme-install.md
    │       ├── basic-config.md
    │       └── content-creation.md
    │
    ├── css/                      # 自定义样式
    │   └── custom.css
    │
    ├── js/                       # 自定义脚本
    │   └── custom.js
    │
    └── img/                      # 图片资源（需自行添加）
```

## 🚀 快速安装

### 1. 环境准备

确保已安装：
- **Node.js** >= 14.0.0
- **Git**

### 2. 安装步骤

```bash
# 进入项目目录
cd my-hexo-blog

# 安装依赖
npm install

# 启动本地服务器
npm run server
```

访问 `http://localhost:4000` 查看效果。

## 📝 内容说明

### 已包含的示例文章

项目已包含 7 篇示例文章：

1. **欢迎来到追云之帆** - 博客介绍
2. **Hexo + Butterfly 主题搭建指南** - 技术教程
3. **大一下学期生命学院之行** - 游记
4. **孙一诺** - 春日游记
5. **登超然台记** - 登山游记
6. **青玉案·泉城春游** - 济南游记
7. **思人之爱** - 生活随笔

### 已包含的页面

- **首页** (`/`) - 文档中心首页
- **关于** (`/about/`) - 个人介绍
- **友链** (`/links/`) - 友情链接
- **标签** (`/tags/`) - 标签云
- **分类** (`/categories/`) - 文章分类
- **文档** (`/docs/`) - 完整文档中心

### 文档中心内容

- **快速开始**
  - 主题安装
  - 基础配置
  - 内容创建
- **主题页面** (待扩展)
- **标签外挂** (待扩展)
- **常见问题** (待扩展)
- **高级配置** (待扩展)

## ⚙️ 个性化配置

### 修改网站信息

编辑 `_config.yml`：

```yaml
title: 你的网站名称
subtitle: 你的副标题
description: 网站描述
author: 你的名字
```

### 修改主题配置

编辑 `_config.butterfly.yml`：

```yaml
# 头像
avatar:
  img: /img/avatar.jpg

# 社交链接
social:
  fab fa-github: https://github.com/你的用户名 || GitHub
  fab fa-zhihu: https://www.zhihu.com/people/你的用户名 || 知乎
  fas fa-envelope: mailto:你的邮箱 || Email
```

### 添加图片资源

在 `source/img/` 目录下添加以下图片：

- `avatar.jpg` - 头像图片
- `bg.jpg` - 背景图片
- `cover1.jpg`, `cover2.jpg`, `cover3.jpg` - 文章封面
- 其他自定义图片

## 🎨 自定义样式

- **CSS**: `source/css/custom.css`
- **JavaScript**: `source/js/custom.js`

已包含的自定义功能：
- 淡入动画
- 平滑滚动
- 阅读进度条
- 代码复制按钮
- 响应式设计
- 暗黑模式支持

## 📦 部署

### GitHub Pages

```bash
# 安装部署插件
npm install hexo-deployer-git --save

# 配置 _config.yml
deploy:
  type: git
  repo: https://github.com/你的用户名/你的用户名.github.io.git
  branch: main

# 部署
npm run deploy
```

### Netlify / Vercel

1. 推送代码到 GitHub
2. 在平台导入项目
3. 构建命令：`npm run build`
4. 发布目录：`public`

## 📚 文档资源

- [README.md](README.md) - 项目说明
- [QUICKSTART.md](QUICKSTART.md) - 5分钟快速开始
- [SETUP.md](SETUP.md) - 详细设置指南
- [Hexo 官方文档](https://hexo.io/zh-cn/docs/)
- [Butterfly 主题文档](https://butterfly.js.org/)

## 🔧 常用命令

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

## ⚠️ 注意事项

1. **首次使用**：需要运行 `npm install` 安装依赖
2. **图片资源**：需要自行添加图片到 `source/img/` 目录
3. **个人信息**：记得修改配置文件中的个人信息
4. **主题安装**：首次运行会自动安装 Butterfly 主题
5. **端口占用**：如果 4000 端口被占用，使用 `hexo server -p 5000`

## 🐛 故障排除

### 依赖安装失败

```bash
# 清理缓存
npm cache clean --force

# 重新安装
rm -rf node_modules package-lock.json
npm install
```

### 主题不生效

```bash
# 清理并重新生成
hexo clean
hexo generate
```

### 图片不显示

- 检查图片路径是否正确
- 确保图片在 `source/img/` 目录下
- 使用 `/img/图片名.jpg` 格式引用

## 💡 下一步

1. ✅ 安装依赖并启动项目
2. ✅ 修改个人信息和配置
3. ✅ 添加图片资源
4. ✅ 创建你的第一篇文章
5. ✅ 部署到线上

## 🤝 获取帮助

- 查看文档：[SETUP.md](SETUP.md)
- 提交 Issue
- 查看 Hexo 和 Butterfly 官方文档

---

**祝你使用愉快！🎉**

如有问题，欢迎随时联系！
