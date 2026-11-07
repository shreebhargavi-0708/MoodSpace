@echo off
echo ===================================================
echo   Starting MOODSPACE - Personal Mood Journal
echo ===================================================
set PATH=%CD%\.tools\node;%PATH%
echo Running Vite dev server at http://localhost:5173/ ...
node .\node_modules\vite\bin\vite.js --host
pause
