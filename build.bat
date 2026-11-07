@echo off
echo ===================================================
echo   Building MOODSPACE Production Bundle
echo ===================================================
set PATH=%CD%\.tools\node;%PATH%
node .\node_modules\vite\bin\vite.js build
echo.
echo Build completed! Output in /dist folder.
pause
