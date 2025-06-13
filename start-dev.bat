@echo off
echo.
echo ====================================
echo   PORTFOLIO DEVELOPMENT SERVER
echo ====================================
echo.
echo Building assets...
call npm run build
echo.
echo Assets build completed!
echo.
echo Starting development server...
echo.
echo Your portfolio is available at:
echo   ^> Local:   http://localhost:8000
echo   ^> Network: http://192.168.1.XXX:8000
echo.
echo 📁 Project Structure:
echo   - HTML: Clean and modular
echo   - CSS:  Compiled to dist/output.css
echo   - JS:   6 organized modules in dist/js/
echo   - Assets: Local Font Awesome and AOS
echo.
echo Press Ctrl+C to stop the server
echo.
python -m http.server 8000
