@echo off
chcp 65001 >nul
cd /d "%~dp0"
echo === EN-133-029 Industrial Robotics e-Learning : Docker ===
where docker >nul 2>nul
if errorlevel 1 (
  echo [ERROR] Docker not found. Please install and start Docker Desktop first.
  pause
  exit /b 1
)
docker compose up -d --build
if errorlevel 1 (
  echo [ERROR] docker compose failed. Make sure Docker Desktop is running.
  pause
  exit /b 1
)
echo Opening http://localhost:8030 ...
timeout /t 5 >nul
start "" http://localhost:8030
docker compose ps
pause
