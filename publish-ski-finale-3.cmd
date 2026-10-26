@echo off
setlocal
cd /d "%~dp0"
set LOG=%~dp0publish.log
echo. >> "%LOG%"
echo ===================== STEP 2 %DATE% %TIME% >> "%LOG%"
echo.
echo  Finishing the publish. Please don't close this window.
echo.

call :run "Fetch latest from GitHub" git fetch origin || goto fail
for /f %%i in ('git rev-parse origin/main') do set REMOTE_MAIN=%%i
echo origin/main = %REMOTE_MAIN% >> "%LOG%"
if /i not "%REMOTE_MAIN%"=="1f7b2fe934838d30c6823c89ab42a7cc82202dcf" (
  echo STOP: GitHub main changed. Nothing was pushed. >> "%LOG%"
  goto fail
)
call :run "Backup still on GitHub" git ls-remote --exit-code origin refs/heads/backup/ski-opening-2026 || goto fail
call :run "New version sits directly on top of main" git merge-base --is-ancestor origin/main feature/pause-online-booking || goto fail
call :run "New commit" git log --oneline -3 feature/pause-online-booking || goto fail
call :run "Files in new commit" git diff --stat origin/main feature/pause-online-booking || goto fail

call :run "Switch to main" git checkout -f main || goto fail
call :run "Move main to the new version" git reset --hard feature/pause-online-booking || goto fail
call :run "Push main to GitHub" git push origin main || goto fail
call :run "Result" git log --oneline -3 origin/main || goto fail

echo SUCCESS >> "%LOG%"
echo.
echo  Done! The new version is on GitHub main. You can close this window.
del "%~dp0publish-msg.txt" >nul 2>&1
del "%~dp0publish-ski-finale.cmd" >nul 2>&1
del "%~dp0publish-ski-finale-2.cmd" >nul 2>&1
pause
(goto) 2>nul & del "%~f0"
exit /b 0

:run
set STEP=%~1
shift
echo. >> "%LOG%"
echo ==== %STEP% ==== >> "%LOG%"
echo  - %STEP%...
%1 %2 %3 %4 %5 %6 %7 %8 %9 >> "%LOG%" 2>&1
if errorlevel 1 (
  echo [FAILED] %STEP% >> "%LOG%"
  exit /b 1
)
echo [ok] %STEP% >> "%LOG%"
exit /b 0

:fail
echo FAILED >> "%LOG%"
echo.
echo  Something went wrong - nothing more was changed. Details are in publish.log
pause
exit /b 1
