# 🚀 开始使用指南

## ✅ 你已经完成的工作

- ✅ 项目文件已创建
- ✅ 个人信息已配置
- ✅ 图片资源已添加（avatar.jpg, bg.jpg, cover1-3.jpg）

## 📦 接下来需要做的事情

### 第一步：安装 Node.js（如果还没安装）

Hexo 需要 Node.js 环境才能运行。

**检查是否已安装：**
```bash
node -v
npm -v
```

如果显示版本号，说明已安装，可以跳过此步骤。

**如果未安装：**

1. 访问 Node.js 官网：https://nodejs.org/
2. 下载 LTS（长期支持）版本
3. 运行安装程序，按照提示完成安装
4. 重新打开命令提示符（CMD）或 PowerShell
5. 再次运行 `node -v` 确认安装成功

### 第二步：安装项目依赖

打开命令提示符（CMD）或 PowerShell，执行以下命令：

```bash
# 1. 进入项目目录
cd c:\Users\Lenovo\Downloads\my-hexo-blog

# 2. 安装所有依赖（这会自动安装 Hexo 和 Butterfly 主题）
npm install
```

**说明：**
- `npm install` 会根据 `package.json` 自动安装：
  - Hexo 7.3.0
  - Butterfly 主题 5.4.3
  - 所有必需的插件和依赖
- 首次安装可能需要 3-5 分钟，请耐心等待
- 安装完成后会在项目目录下生成 `node_modules` 文件夹

### 第三步：启动本地服务器

```bash
# 方式一：使用 npm 脚本（推荐）
npm run server

# 方式二：直接使用 hexo 命令
npx hexo server
```

**成功启动后会显示：**
```
INFO  Hexo is running at http://localhost:4000/. Press Ctrl+C to stop.
```

### 第四步：访问网站

在浏览器中打开：**http://localhost:4000**

你应该能看到：
- 首页文档中心
- 你的个人信息
- 示例文章
- 关于页面
- 友链页面

## 🎨 常用命令

### 启动和停止

```bash
# 启动本地服务器
npm run server

# 停止服务器
按 Ctrl+C
```

### 创建内容

```bash
# 创建新文章
npx hexo new "文章标题"

# 创建新页面
npx hexo new page "页面名称"
```

### 生成和清理

```bash
# 清理缓存
npm run clean

# 生成静态文件
npm run build

# 清理后重新生成
npm run clean && npm run build
```

## 🔧 常见问题

### 1. 端口 4000 被占用

如果提示端口被占用，使用其他端口：

```bash
npx hexo server -p 5000
```

然后访问：http://localhost:5000

### 2. npm install 失败

**方法一：清理缓存后重试**
```bash
npm cache clean --force
npm install
```

**方法二：使用国内镜像源**
```bash
npm config set registry https://registry.npmmirror.com
npm install
```

### 3. 图片不显示

确保图片路径正确：
- 图片应放在 `source/img/` 目录下
- 在文章中使用 `/img/图片名.jpg` 引用
- 例如：`![头像](/img/avatar.jpg)`

### 4. 主题样式不生效

```bash
# 清理缓存后重新生成
npm run clean
npx hexo generate
npm run server
```

## 📝 编辑内容

### 修改个人信息

- **网站标题、描述**：编辑 `_config.yml`
- **主题配置、社交链接**：编辑 `_config.butterfly.yml`
- **关于页面**：编辑 `source/about/index.md`
- **首页**：编辑 `source/index.md`

### 创建文章

1. 运行命令创建文章：
```bash
npx hexo new "我的第一篇文章"
```

2. 编辑生成的文件：`source/_posts/我的第一篇文章.md`

3. 文章格式示例：
```markdown
---
title: 我的第一篇文章
date: 2025-01-07 22:00:00
tags:
  - 技术
  - AI
categories:
  - 博客
cover: /img/cover1.jpg
description: 这是我的第一篇技术博客
---

# 文章标题

这里是文章内容...

## 小标题

更多内容...
```

## 🌐 部署到线上

### 部署到 GitHub Pages

1. **安装部署插件**
```bash
npm install hexo-deployer-git --save
```

2. **在 GitHub 创建仓库**
   - 仓库名：`你的用户名.github.io`
   - 例如：`sjkncs.github.io`

3. **配置 `_config.yml`**
```yaml
deploy:
  type: git
  repo: https://github.com/sjkncs/sjkncs.github.io.git
  branch: main
```

4. **部署**
```bash
npm run clean
npm run build
npx hexo deploy
```

5. **访问网站**
   - 网址：https://sjkncs.github.io

### 部署到 Netlify（推荐，更简单）

1. 将项目推送到 GitHub
2. 访问 https://www.netlify.com/
3. 点击 "New site from Git"
4. 选择你的 GitHub 仓库
5. 构建设置：
   - Build command: `npm run build`
   - Publish directory: `public`
6. 点击 "Deploy site"

## 📚 学习资源

- [Hexo 官方文档](https://hexo.io/zh-cn/docs/)
- [Butterfly 主题文档](https://butterfly.js.org/)
- [Markdown 语法指南](https://www.markdown.xyz/basic-syntax/)

## ✅ 检查清单

在开始使用前，确保：

- [ ] Node.js 已安装（运行 `node -v` 检查）
- [ ] 项目依赖已安装（运行 `npm install`）
- [ ] 图片资源已添加到 `source/img/` 目录
- [ ] 本地服务器能正常启动（运行 `npm run server`）
- [ ] 能在浏览器访问 http://localhost:4000
- [ ] 个人信息显示正确

## 🎯 快速启动命令（复制粘贴）

```bash
# 一键启动（首次使用）
cd c:\Users\Lenovo\Downloads\my-hexo-blog
npm install
npm run server
```

然后在浏览器打开：**http://localhost:4000**

---

## 💡 提示

- 修改配置文件后，需要重启服务器才能看到效果（Ctrl+C 停止，然后重新运行 `npm run server`）
- 修改文章内容后，刷新浏览器即可看到更新
- 建议使用 VS Code 编辑 Markdown 文件，有语法高亮和预览功能

## 🆘 需要帮助？

如果遇到问题：
1. 查看本文档的"常见问题"部分
2. 查看 `SETUP.md` 获取详细设置指南
3. 查看 Hexo 和 Butterfly 官方文档
4. 检查命令行的错误提示信息

---

**祝你使用愉快！🎉**

开始你的博客之旅吧！
