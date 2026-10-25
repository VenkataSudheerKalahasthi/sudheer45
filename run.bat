@echo off
title Portfolio Dev Server
echo ===================================================
echo   Starting Portfolio Dev Server
echo ===================================================
echo.
echo [1/3] Freeing port 3000 if occupied...
powershell -NoProfile -Command "try { $proc = (Get-NetTCPConnection -LocalPort 3000 -ErrorAction SilentlyContinue).OwningProcess; if ($proc) { Stop-Process -Id $proc -Force } } catch {}" >nul 2>&1

echo [2/3] Opening browser in background...
start "" cmd /c "timeout /t 2 /nobreak >nul & start http://localhost:3000"

echo [3/3] Launching Next.js on http://localhost:3000 ...
echo.
where pnpm >nul 2>nul
if %errorlevel% equ 0 (
    pnpm dev
) else (
    npm run dev
)
if %errorlevel% neq 0 (
    echo.
    echo Something went wrong. Trying npm run dev...
    npm run dev
)
pause
