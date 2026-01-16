Write-Host "🌊 Fresh Water Deployment Starting..." -ForegroundColor Cyan

# Clean workspace
Write-Host "🧹 Cleaning temp files..."
Remove-Item -Recurse -Force "node_modules", ".fly", ".git", ".vercel" -ErrorAction SilentlyContinue
Get-ChildItem -Path . -Include "*.log", "*.tmp" -Recurse | Remove-Item -Force -ErrorAction SilentlyContinue

# Ensure folders exist
if (-not (Test-Path "public")) { mkdir public }
if (-not (Test-Path "public/media")) { mkdir public/media }
if (-not (Test-Path "backups")) { mkdir backups }

# Copy all videos from media to public/media
Write-Host "📁 Copying media files to public/media..."
Copy-Item "media\*" "public\media\" -Recurse -Force

# Diagnostic check — list video files
Write-Host "`n🔍 Checking media contents:"
Get-ChildItem "public\media" -Recurse -File | Select-Object Name, Length | Format-Table

# Pre-deploy checks
if (-not (Test-Path "public\media\stay lit 1 vid.mp4")) {
    Write-Host "⚠️  Warning: public/media/stay lit 1 vid.mp4 is missing."
}

$mp4Count = (Get-ChildItem "public\media" -Recurse -Include *.mp4).Count
if ($mp4Count -lt 5) {
    Write-Host "⚠️  Warning: Fewer than 5 videos found in public/media ($mp4Count detected)."
} else {
    Write-Host "✅ $mp4Count video files ready for deployment."
}

# Deploy to Fly.io
Write-Host "`n🚀 Deploying to Fly.io..."
fly deploy --remote-only

# Verify deployment
Write-Host "`n✅ Checking Fly.io app status..."
fly status

Write-Host "`n🌐 Visit your site at https://fresh-water-music.fly.dev/" -ForegroundColor Green
