$ErrorActionPreference = "Stop"

$projectRoot = Split-Path -Parent $PSScriptRoot
Set-Location $projectRoot

if (-not (Get-Command npm -ErrorAction SilentlyContinue)) {
  Write-Host "npm is required but was not found in PATH. Install Node.js from https://nodejs.org/." -ForegroundColor Red
  Read-Host "Press Enter to exit"
  exit 1
}

if (-not (Test-Path "$projectRoot/node_modules")) {
  Write-Host "Installing dependencies..." -ForegroundColor Cyan
  npm install
}

Write-Host "Building app..." -ForegroundColor Cyan
npm run build

$port = if ($env:FRESH_WATER_PORT) { $env:FRESH_WATER_PORT } else { "3000" }
$url = "http://localhost:$port"

Write-Host "Opening $url" -ForegroundColor Green
Start-Process $url

Write-Host "Starting Fresh Water Music on port $port" -ForegroundColor Green
npm run start -- --port $port
