@echo off
rem Sert le site en local (les workers WASM ne marchent pas en file://) puis ouvre le navigateur.
cd /d "%~dp0"
start "" "http://localhost:8123/"
python -m http.server 8123
