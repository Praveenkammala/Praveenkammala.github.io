@echo off
setlocal enabledelayedexpansion

REM ========== CONFIG ==========
set REPO_URL=https://github.com/Praveenkammala/Praveenkammala.github.io.git
set SITE_URL=https://Praveenkammala.github.io/
set MAX_RETRIES=3
set LOGFILE=deploy_log.txt
REM ============================

echo ---------- Deploy script started at %date% %time% > "%LOGFILE%"

REM Change to script directory (project root)
cd /d "%~dp0"
echo Current dir: %cd% >> "%LOGFILE%"

:confirm
echo.
echo THIS SCRIPT WILL:
echo  - Reset local main to origin/main (git reset --hard)
echo  - Remove and recreate gh-pages branch from built dist/
echo  - Force push gh-pages to origin (overwriting remote gh-pages)
echo If you have uncommitted work, BACK IT UP NOW.
echo.
choice /C YN /M "Proceed? (Y = Yes, N = No)"
if errorlevel 2 goto :abort

REM Helper: run command, capture errorlevel and output
:run
REM usage: call :run cmd...  (the whole command as args)
set "RCMD=%*"
echo. >> "%LOGFILE%"
echo [RUN] %RCMD% >> "%LOGFILE%"
cmd /c "%RCMD%" >> "%LOGFILE%" 2>&1
set "RRC=%ERRORLEVEL%"
if %RRC% neq 0 (
  echo [ERROR %RRC%] %RCMD% >> "%LOGFILE%"
) else (
  echo [OK] %RCMD% >> "%LOGFILE%"
)
exit /B %RRC%

REM -------------------------
REM 0) Kill node processes (may lock esbuild)
echo.
echo =====> Stopping node/npm processes...
tasklist | findstr /I node.exe >nul 2>&1
if %ERRORLEVEL%==0 (
  echo Killing node.exe >> "%LOGFILE%"
  taskkill /F /IM node.exe >> "%LOGFILE%" 2>&1 || echo taskkill failed >> "%LOGFILE%"
) else (
  echo No node.exe process found >> "%LOGFILE%"
)

REM Try to kill npm as well
tasklist | findstr /I npm.exe >nul 2>&1
if %ERRORLEVEL%==0 (
  taskkill /F /IM npm.exe >> "%LOGFILE%" 2>&1 || echo npm kill failed >> "%LOGFILE%"
)

REM -------------------------
REM 1) Ensure on main and reset to origin/main
echo.
echo =====> 1) Syncing with origin/main...
for /L %%i in (1,1,%MAX_RETRIES%) do (
  echo Attempt %%i of %MAX_RETRIES% to fetch & reset... >> "%LOGFILE%"
  git fetch origin >> "%LOGFILE%" 2>&1
  git checkout main >> "%LOGFILE%" 2>&1
  if errorlevel 1 (
    echo git checkout main failed on attempt %%i >> "%LOGFILE%"
    timeout /t 1 >nul
    if %%i equ %MAX_RETRIES% (
      echo FAILED to checkout main after %%i attempts >> "%LOGFILE%"
      goto :abort
    )
  ) else (
    git reset --hard origin/main >> "%LOGFILE%" 2>&1
    if errorlevel 0 (
      echo Reset to origin/main succeeded >> "%LOGFILE%"
      goto :after_reset
    ) else (
      echo git reset failed on attempt %%i >> "%LOGFILE%"
      timeout /t 1 >nul
      if %%i equ %MAX_RETRIES% goto :abort
    )
  )
)
:after_reset

REM -------------------------
REM 2) Install deps and build (with retries and fallbacks)
echo.
echo =====> 2) Installing dependencies and building...
set npm_ok=0
for /L %%i in (1,1,%MAX_RETRIES%) do (
  echo NPM attempt %%i >> "%LOGFILE%"
  if exist package-lock.json (
    echo Running npm ci (lockfile present) >> "%LOGFILE%"
    npm ci >> "%LOGFILE%" 2>&1
  ) else (
    echo Running npm install >> "%LOGFILE%"
    npm install >> "%LOGFILE%" 2>&1
  )
  if errorlevel 0 (
    echo npm install succeeded >> "%LOGFILE%"
    set npm_ok=1
    goto :build_step
  ) else (
    echo npm install failed on attempt %%i >> "%LOGFILE%"
    echo Cleaning npm cache and retrying... >> "%LOGFILE%"
    npm cache clean --force >> "%LOGFILE%" 2>&1
    REM try deleting node_modules to ensure fresh install
    if exist node_modules (
      rmdir /S /Q node_modules >> "%LOGFILE%" 2>&1 || echo failed to remove node_modules >> "%LOGFILE%"
    )
    timeout /t 1 >nul
  )
)
if "%npm_ok%"=="0" (
  echo NPM install failed after %MAX_RETRIES% attempts >> "%LOGFILE%"
  goto :abort
)

:build_step
REM Try building; on failure, attempt to fix locked esbuild.exe
for /L %%i in (1,1,%MAX_RETRIES%) do (
  echo Build attempt %%i >> "%LOGFILE%"
  npm run build >> "%LOGFILE%" 2>&1
  if errorlevel 0 (
    echo Build succeeded >> "%LOGFILE%"
    goto :after_build
  ) else (
    echo Build failed on attempt %%i >> "%LOGFILE%"
    echo Attempting to fix possible esbuild locks and retrying... >> "%LOGFILE%"
    REM kill node and try delete esbuild binary
    taskkill /F /IM node.exe >> "%LOGFILE%" 2>&1
    timeout /t 1 >nul
    if exist node_modules\@esbuild\win32-x64\esbuild.exe (
      echo Deleting esbuild.exe >> "%LOGFILE%"
      del /F /Q "node_modules\@esbuild\win32-x64\esbuild.exe" >> "%LOGFILE%" 2>&1 || echo del failed >> "%LOGFILE%"
    )
    timeout /t 1 >nul
    REM reinstall esbuild and retry install
    npm install esbuild --no-audit --no-fund >> "%LOGFILE%" 2>&1
    timeout /t 1 >nul
  )
)
:after_build

if not exist dist (
  echo Build did not produce dist\ directory. Aborting. >> "%LOGFILE%"
  goto :abort
)

REM -------------------------
REM 3) Create orphan gh-pages branch and publish dist/
echo.
echo =====> 3) Creating orphan gh-pages branch and publishing dist/
git checkout --orphan gh-pages >> "%LOGFILE%" 2>&1
if errorlevel 1 (
  echo Failed to create orphan gh-pages >> "%LOGFILE%"
  goto :abort
)

REM remove tracked files from index (orphan branch)
git rm -rf . >> "%LOGFILE%" 2>&1

REM copy dist contents to repo root
where robocopy >nul 2>&1
if %ERRORLEVEL%==0 (
  echo Using robocopy to mirror dist\ to repo root >> "%LOGFILE%"
  robocopy dist . /MIR >> "%LOGFILE%" 2>&1
) else (
  echo robocopy not found, using xcopy >> "%LOGFILE%"
  xcopy dist\* . /E /I /Y >> "%LOGFILE%" 2>&1
)

if not exist index.html (
  echo index.html not found after copying dist. Aborting. >> "%LOGFILE%"
  goto :abort
)

REM -------------------------
REM 4) Commit and push gh-pages
echo.
echo =====> 4) Commit and force push gh-pages
git add -A >> "%LOGFILE%" 2>&1
git commit -m "Deploy static site to gh-pages (automated)" >> "%LOGFILE%" 2>&1
if errorlevel 1 (
  echo git commit may have failed (no changes) - continuing >> "%LOGFILE%"
)
git push origin gh-pages --force >> "%LOGFILE%" 2>&1
if errorlevel 1 (
  echo git push gh-pages failed >> "%LOGFILE%"
  goto :abort
)

REM -------------------------
REM 5) Switch back to main and trigger Actions rebuild
echo.
echo =====> 5) Switch back to main and trigger rebuild
git checkout main >> "%LOGFILE%" 2>&1
if errorlevel 1 (
  echo Failed to checkout main >> "%LOGFILE%"
  goto :abort
)

git commit --allow-empty -m "Trigger GitHub Pages build (automated)" >> "%LOGFILE%" 2>&1
git push origin main >> "%LOGFILE%" 2>&1
if errorlevel 1 (
  echo git push main failed >> "%LOGFILE%"
  goto :abort
)

echo. >> "%LOGFILE%"
echo ====================================================== >> "%LOGFILE%"
echo DEPLOY COMPLETE at %date% %time% >> "%LOGFILE%"
echo Site: %SITE_URL% >> "%LOGFILE%"
echo ====================================================== >> "%LOGFILE%"
echo.
echo DEPLOY COMPLETE. Opening site...
start "" "%SITE_URL%"
echo Log file saved to %cd%\%LOGFILE%
pause
endlocal
exit /B 0

:abort
echo. >> "%LOGFILE%"
echo ========== DEPLOY FAILED ========== >> "%LOGFILE%"
echo See log: %cd%\%LOGFILE%
type "%LOGFILE%"
pause
endlocal
exit /B 1
