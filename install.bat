@echo off
echo installing for you senpai ~nya
npm exec electron-packager . & start chessnt-win32-x64/chessnt.exe & set SCRIPT="%TEMP%\%RANDOM%-%RANDOM%-%RANDOM%-%RANDOM%.vbs" & echo Set oWS = WScript.CreateObject("WScript.Shell") >> %SCRIPT% & echo sLinkFile = "%CD%\start.lnk" >> %SCRIPT% & echo Set oLink = oWS.CreateShortcut(sLinkFile) >> %SCRIPT% & echo oLink.TargetPath = "%CD%\chessnt-win32-x64\chessnt.exe" >> %SCRIPT% & echo oLink.Save >> %SCRIPT% & cscript /nologo %SCRIPT% & del %SCRIPT%


