---
title: 内容创建
date: 2025-01-07
---

# 内容创建

本文介绍如何创建和管理文章。

## 创建文章

使用以下命令创建新文章：

```bash
hexo new "文章标题"
```

这会在 `source/_posts/` 目录下创建一个新的 Markdown 文件。

## Front-matter

每篇文章开头的 YAML 配置称为 Front-matter：

```yaml
---
title: 文章标题
date: 2025-01-07 10:00:00
tags:
  - 标签1
  - 标签2
categories:
  - 分类名称
cover: /img/cover.jpg
description: 文章描述
---
```

## 常用字段

- `title`: 文章标题
- `date`: 发布日期
- `tags`: 标签（可多个）
- `categories`: 分类（可多个）
- `cover`: 封面图片
- `description`: 文章描述
- `top`: 是否置顶

## 文章内容

使用 Markdown 语法编写文章内容：

```markdown
# 一级标题

## 二级标题

正文内容...

- 列表项1
- 列表项2

**粗体** *斜体*

[链接](https://example.com)

![图片](/img/example.jpg)
```

## 代码块

````markdown
```javascript
function hello() {
  console.log('Hello World!');
}
```
````

## 创建页面

创建独立页面：

```bash
hexo new page "页面名称"
```

## 下一步

- [页面类型](/docs/pages/page-types/)
- [标签外挂](/docs/tags/built-in/)
