Write-Host "🌊 Fresh Water Deployment Starting..." -ForegroundColor Cyan

# Step 1: Clean workspace
Write-Host "🧹 Cleaning up..."
Remove-Item -Recurse -Force "node_modules", ".fly", ".git", ".vercel" -ErrorAction SilentlyContinue
Get-ChildItem -Path . -Include "*.log", "*.tmp" -Recurse | Remove-Item -Force -ErrorAction SilentlyContinue

# Step 2: Verify folders
if (-not (Test-Path "public")) { mkdir public }
if (-not (Test-Path "public/media")) { mkdir public/media }
if (-not (Test-Path "backups")) { mkdir backups }

# Step 3: Copy media
Write-Host "📁 Copying media into public..."
Copy-Item "media\*" "public\media\" -Recurse -Force

# Step 4: Deploy
Write-Host "🚀 Deploying to Fly.io..."
fly deploy --remote-only

# Step 5: Verify
Write-Host "✅ Checking status..."
fly status

Write-Host "🌐 Visit your site at https://fresh-water-music.fly.dev/" -ForegroundColor Green
