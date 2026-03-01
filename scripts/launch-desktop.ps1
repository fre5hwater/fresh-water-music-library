$ErrorActionPreference = "Stop"

$projectRoot = Split-Path -Parent $PSScriptRoot
Set-Location $projectRoot

function Invoke-NpmCommand {
  param([Parameter(Mandatory = $true)][string]$Command)

  Write-Host "Running: npm $Command" -ForegroundColor DarkCyan
  & npm $Command

  if ($LASTEXITCODE -ne 0) {
    throw "Command failed: npm $Command"
  }
}

if (-not (Get-Command npm -ErrorAction SilentlyContinue)) {
  Write-Host "npm is required but was not found in PATH. Install Node.js from https://nodejs.org/." -ForegroundColor Red
  Read-Host "Press Enter to exit"
  exit 1
}

if (-not (Test-Path "$projectRoot/node_modules")) {
  Write-Host "Installing dependencies (first run)..." -ForegroundColor Cyan
  Invoke-NpmCommand "install"
}

$port = if ($env:FRESH_WATER_PORT) { $env:FRESH_WATER_PORT } else { "3000" }
$shouldRebuild = $env:FRESH_WATER_REBUILD -eq "1"
$buildIdPath = Join-Path $projectRoot ".next/BUILD_ID"

if ($shouldRebuild -or -not (Test-Path $buildIdPath)) {
  Write-Host "Building app..." -ForegroundColor Cyan
  Invoke-NpmCommand "run build"
} else {
  Write-Host "Using existing build (set FRESH_WATER_REBUILD=1 to force rebuild)." -ForegroundColor Yellow
}

$url = "http://localhost:$port"
Write-Host "Opening $url" -ForegroundColor Green
Start-Process $url

Write-Host "Starting Fresh Water Music on port $port" -ForegroundColor Green
Invoke-NpmCommand "run start -- --port $port"
