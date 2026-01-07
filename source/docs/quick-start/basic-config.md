---
title: 基础配置
date: 2025-01-07
---

# 基础配置

本文介绍 Butterfly 主题的基本配置选项。

## 网站信息

在 `_config.yml` 中配置网站基本信息：

```yaml
title: 网站标题
subtitle: 网站副标题
description: 网站描述
keywords: 关键词1, 关键词2
author: 作者名称
language: zh-CN
timezone: Asia/Shanghai
```

## 导航菜单

在 `_config.butterfly.yml` 中配置导航菜单：

```yaml
menu:
  首页: / || fas fa-home
  归档: /archives/ || fas fa-archive
  标签: /tags/ || fas fa-tags
  分类: /categories/ || fas fa-folder-open
  关于: /about/ || fas fa-heart
```

## 头像设置

```yaml
avatar:
  img: /img/avatar.jpg
  effect: true
```

## 社交链接

```yaml
social:
  fab fa-github: https://github.com/yourusername || GitHub
  fas fa-envelope: mailto:your.email@example.com || Email
```

## 顶部图片

```yaml
index_img: /img/bg.jpg
default_top_img: /img/default_bg.jpg
```

## 下一步

- [内容创建](/docs/quick-start/content-creation/)
- [页面类型](/docs/pages/page-types/)
