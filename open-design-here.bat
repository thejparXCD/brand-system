@echo off
setlocal
title Celebration OnPoint - Open Design folder

cd /d "%~dp0"
echo.
echo  Celebration OnPoint - Open Design setup
echo  ========================================
echo.

git pull 2>nul
if errorlevel 1 (
  echo  [warn] git pull failed - folder may still work if you already pulled.
  echo.
)

set "OD_FOLDER=%~dp0design-systems\celebration-onpoint"

if not exist "%OD_FOLDER%\manifest.json" (
  echo  ERROR: Open Design package not found:
  echo  %OD_FOLDER%
  echo.
  echo  Run: git pull
  echo  Then run this script again.
  pause
  exit /b 1
)

echo  Open Design folder:
echo  %OD_FOLDER%
echo.
echo  In Open Design:
echo    Advanced -^> Link local code -^> Browse folder -^> select this folder
echo.
explorer "%OD_FOLDER%"
pause
