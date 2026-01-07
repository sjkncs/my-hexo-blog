---
title: 主题安装
date: 2025-01-07
---

# 主题安装

本文介绍如何安装和配置 Butterfly 主题。

## 安装方式

### 方式一：使用 npm（推荐）

```bash
npm install hexo-theme-butterfly
```

### 方式二：使用 Git

```bash
git clone -b master https://github.com/jerryc127/hexo-theme-butterfly.git themes/butterfly
```

## 应用主题

修改 Hexo 根目录下的 `_config.yml`：

```yaml
theme: butterfly
```

## 安装插件

Butterfly 主题需要以下插件：

```bash
npm install hexo-renderer-pug hexo-renderer-stylus --save
```

## 创建主题配置文件

在 Hexo 根目录创建 `_config.butterfly.yml` 文件，用于配置主题。

## 验证安装

```bash
hexo clean
hexo generate
hexo server
```

访问 `http://localhost:4000` 查看效果。

## 下一步

- [基础配置](/docs/quick-start/basic-config/)
- [内容创建](/docs/quick-start/content-creation/)
