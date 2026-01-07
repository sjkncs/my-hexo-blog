---
title: 内置标签
date: 2025-01-08
type: "docs"
comments: false
---

# ⚔️ 内置标签外挂

Butterfly主题提供了丰富的标签外挂功能，让你的文章更加生动有趣。

## 📝 文本样式

### 行内文本样式

```markdown
{% note simple %}
这是一个简单的提示框
{% endnote %}

{% note default %}
默认提示框
{% endnote %}

{% note primary %}
主要提示框
{% endnote %}

{% note success %}
成功提示框
{% endnote %}

{% note info %}
信息提示框
{% endnote %}

{% note warning %}
警告提示框
{% endnote %}

{% note danger %}
危险提示框
{% endnote %}
```

### 标签样式

```markdown
{% label text color %}
```

颜色选项：`default` `primary` `success` `info` `warning` `danger`

## 🎨 按钮

```markdown
{% btn url, text, icon, color %}
```

示例：
```markdown
{% btn https://butterfly.js.org/, Butterfly官网, fa fa-home, blue %}
```

## 📷 图片相关

### 单张图片

```markdown
{% img [class names] /path/to/image [width] [height] [title text [alt text]] %}
```

### 图片画廊

```markdown
{% gallery %}
![图片1](/img/1.jpg)
![图片2](/img/2.jpg)
![图片3](/img/3.jpg)
{% endgallery %}
```

## 📊 选项卡

```markdown
{% tabs 标签名 %}
<!-- tab 标签1 -->
内容1
<!-- endtab -->

<!-- tab 标签2 -->
内容2
<!-- endtab -->

<!-- tab 标签3 -->
内容3
<!-- endtab -->
{% endtabs %}
```

## 💬 引用

### 普通引用

```markdown
> 这是一段引用文字
```

### 带作者的引用

```markdown
{% blockquote author, source %}
引用内容
{% endblockquote %}
```

## 🎵 多媒体

### 音乐

```markdown
{% meting "歌曲ID" "netease" "song" "theme:auto" %}
```

### 视频

```markdown
{% video url %}
```

## 📦 折叠框

```markdown
{% hideToggle 显示文字,颜色,显示状态 %}
隐藏的内容
{% endhideToggle %}
```

## 🔗 链接卡片

```markdown
{% link 标题, 链接, 图片链接 %}
```

## ⚠️ 提示框增强

```markdown
{% note modern %}
现代风格提示框
{% endnote %}

{% note flat %}
扁平风格提示框
{% endnote %}

{% note disabled %}
禁用状态提示框
{% endnote %}
```

## 💡 使用技巧

1. **合理使用标签** - 不要过度使用，保持文章简洁
2. **颜色搭配** - 选择合适的颜色突出重点
3. **响应式设计** - 确保在移动端也能正常显示
4. **性能优化** - 避免在一篇文章中使用过多复杂标签
