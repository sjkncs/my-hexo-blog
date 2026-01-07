# 🚀 网站部署指南 - yunyunfanfan.top

## 📋 目录
1. [准备工作](#准备工作)
2. [方案一：GitHub Pages + 自定义域名（推荐）](#方案一github-pages--自定义域名推荐)
3. [方案二：Vercel部署](#方案二vercel部署)
4. [方案三：Netlify部署](#方案三netlify部署)
5. [域名配置](#域名配置)

---

## 准备工作

### 1. 购买域名
- 已有域名：`yunyunfanfan.top`
- 域名注册商：阿里云、腾讯云、GoDaddy等

### 2. 准备GitHub账号
- 注册GitHub账号（如果还没有）
- 用户名：`sjkncs`

---

## 方案一：GitHub Pages + 自定义域名（推荐）

### ✅ 优点
- 完全免费
- 自动部署
- 稳定可靠
- 支持HTTPS

### 📝 步骤

#### 1. 创建GitHub仓库

```bash
# 在GitHub上创建一个新仓库
# 仓库名：my-hexo-blog 或 yunyunfanfan-blog
```

#### 2. 推送代码到GitHub

```bash
# 在项目目录下执行
cd c:\Users\Lenovo\Downloads\my-hexo-blog

# 初始化Git（已完成）
git init

# 添加所有文件
git add .

# 提交
git commit -m "Initial commit: Hexo blog with music player"

# 添加远程仓库（替换为你的仓库地址）
git remote add origin https://github.com/sjkncs/my-hexo-blog.git

# 推送到main分支
git branch -M main
git push -u origin main
```

#### 3. 启用GitHub Pages

1. 进入仓库设置：`Settings` → `Pages`
2. Source选择：`gh-pages` 分支
3. 点击 `Save`

#### 4. 配置自动部署

GitHub Actions配置文件已创建在：`.github/workflows/deploy.yml`

每次推送代码到main分支，会自动：
- 安装依赖
- 生成静态文件
- 部署到gh-pages分支

#### 5. 配置自定义域名

在项目根目录创建 `source/CNAME` 文件：

```bash
echo yunyunfanfan.top > source/CNAME
```

#### 6. 配置DNS解析

在域名注册商（如阿里云）添加DNS记录：

**A记录（推荐）：**
```
类型: A
主机记录: @
记录值: 185.199.108.153
TTL: 600

类型: A
主机记录: @
记录值: 185.199.109.153
TTL: 600

类型: A
主机记录: @
记录值: 185.199.110.153
TTL: 600

类型: A
主机记录: @
记录值: 185.199.111.153
TTL: 600
```

**CNAME记录（备选）：**
```
类型: CNAME
主机记录: www
记录值: sjkncs.github.io
TTL: 600
```

#### 7. 等待生效

- DNS解析需要10分钟-24小时生效
- GitHub Pages会自动配置HTTPS证书

---

## 方案二：Vercel部署

### ✅ 优点
- 部署超快
- 自动HTTPS
- 全球CDN
- 免费额度充足

### 📝 步骤

#### 1. 访问Vercel

https://vercel.com/

#### 2. 导入GitHub仓库

1. 点击 `New Project`
2. 选择你的GitHub仓库
3. 配置构建设置：
   ```
   Framework Preset: Other
   Build Command: npm install && npx hexo generate
   Output Directory: public
   ```

#### 3. 配置自定义域名

1. 进入项目设置 → `Domains`
2. 添加域名：`yunyunfanfan.top`
3. 按照提示配置DNS

#### 4. DNS配置

在域名注册商添加：
```
类型: CNAME
主机记录: @
记录值: cname.vercel-dns.com
TTL: 600
```

---

## 方案三：Netlify部署

### ✅ 优点
- 简单易用
- 自动部署
- 免费HTTPS
- 表单处理

### 📝 步骤

#### 1. 访问Netlify

https://www.netlify.com/

#### 2. 连接GitHub

1. 点击 `New site from Git`
2. 选择GitHub
3. 选择你的仓库

#### 3. 配置构建

```
Build command: npx hexo generate
Publish directory: public
```

#### 4. 配置域名

1. 进入 `Domain settings`
2. 添加自定义域名：`yunyunfanfan.top`
3. 配置DNS

#### 5. DNS配置

```
类型: CNAME
主机记录: @
记录值: [你的netlify域名].netlify.app
TTL: 600
```

---

## 域名配置详解

### DNS记录类型

#### A记录
- 直接指向IP地址
- 适合GitHub Pages
- 需要配置多个IP

#### CNAME记录
- 指向另一个域名
- 适合Vercel、Netlify
- 只需一条记录

### 常见域名注册商配置

#### 阿里云

1. 登录阿里云控制台
2. 进入 `域名` → `解析设置`
3. 添加记录
4. 等待生效（通常10分钟）

#### 腾讯云

1. 登录腾讯云控制台
2. 进入 `DNSPod` → `我的域名`
3. 添加记录
4. 等待生效

#### Cloudflare（推荐）

1. 注册Cloudflare账号
2. 添加域名
3. 修改域名服务器为Cloudflare
4. 添加DNS记录
5. 自动HTTPS + CDN加速

---

## 🔧 本地测试

### 生成静态文件

```bash
npx hexo clean
npx hexo generate
```

### 本地预览

```bash
npx hexo server
# 访问 http://localhost:4000
```

### 部署前检查

```bash
# 检查生成的文件
ls public/

# 确保包含：
# - index.html
# - about/index.html
# - music/index.html
# - css/
# - js/
# - img/
```

---

## 📊 部署后验证

### 1. 访问测试

```
https://yunyunfanfan.top
https://www.yunyunfanfan.top
```

### 2. HTTPS检查

确保网站使用HTTPS，浏览器地址栏显示🔒

### 3. 功能测试

- ✅ 首页加载
- ✅ 关于页面
- ✅ 音乐播放器
- ✅ 文章列表
- ✅ 导航菜单

### 4. 性能测试

使用工具：
- Google PageSpeed Insights
- GTmetrix
- WebPageTest

---

## 🚨 常见问题

### 1. 域名无法访问

**原因**：DNS未生效
**解决**：等待10分钟-24小时，清除浏览器缓存

### 2. 样式丢失

**原因**：配置文件中的URL设置错误
**解决**：检查 `_config.yml` 中的 `url` 和 `root`

```yaml
url: https://yunyunfanfan.top
root: /
```

### 3. 图片无法显示

**原因**：路径错误
**解决**：确保图片在 `source/img/` 目录下

### 4. 音乐播放器不工作

**原因**：APlayer插件未正确加载
**解决**：检查 `_config.yml` 中的APlayer配置

---

## 📈 优化建议

### 1. 启用CDN

使用Cloudflare或其他CDN服务加速访问

### 2. 压缩资源

```bash
npm install hexo-all-minifier --save
```

在 `_config.yml` 添加：
```yaml
all_minifier: true
```

### 3. 图片优化

- 使用WebP格式
- 压缩图片大小
- 使用懒加载

### 4. 添加网站统计

- Google Analytics
- 百度统计
- 51.la统计

---

## 🎯 推荐部署方案

### 个人博客（推荐）

**GitHub Pages + Cloudflare**
- ✅ 完全免费
- ✅ 自动部署
- ✅ 全球CDN
- ✅ 自动HTTPS

### 商业网站

**Vercel + 自定义域名**
- ✅ 极速部署
- ✅ 边缘网络
- ✅ 自动扩展
- ✅ 专业支持

---

## 📞 获取帮助

如果遇到问题：

1. 查看GitHub Actions日志
2. 检查DNS配置
3. 清除浏览器缓存
4. 查看Hexo文档：https://hexo.io/

---

## ✅ 部署检查清单

- [ ] GitHub仓库已创建
- [ ] 代码已推送
- [ ] GitHub Actions配置正确
- [ ] GitHub Pages已启用
- [ ] CNAME文件已创建
- [ ] DNS记录已添加
- [ ] 域名可以访问
- [ ] HTTPS已启用
- [ ] 所有页面正常
- [ ] 音乐播放器工作
- [ ] 移动端适配正常

---

**🎉 完成以上步骤后，你的网站就可以通过 https://yunyunfanfan.top 访问了！**
