# Hexo 部署脚本 - PowerShell版本

Write-Host "🚀 开始部署 Hexo 博客..." -ForegroundColor Green

# 1. 清理旧文件
Write-Host "`n📦 清理旧文件..." -ForegroundColor Yellow
npx hexo clean

# 2. 生成静态文件
Write-Host "`n🔨 生成静态文件..." -ForegroundColor Yellow
npx hexo generate

# 3. Git操作
Write-Host "`n📝 提交到Git..." -ForegroundColor Yellow

# 添加所有文件
git add .

# 获取当前时间作为提交信息
$commitMessage = "Update: $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"

# 提交
git commit -m $commitMessage

# 推送到GitHub
Write-Host "`n🚀 推送到GitHub..." -ForegroundColor Yellow
git push origin main

Write-Host "`n✅ 部署完成！" -ForegroundColor Green
Write-Host "🌐 网站将在几分钟后更新：https://yunyunfanfan.top" -ForegroundColor Cyan
Write-Host "📊 查看部署状态：https://github.com/sjkncs/my-hexo-blog/actions" -ForegroundColor Cyan
