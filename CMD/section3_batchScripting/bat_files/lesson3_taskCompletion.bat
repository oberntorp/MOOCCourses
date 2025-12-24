@echo off
REM /D means only loop directories, multiple parameters exist
REM FOR /D %%A IN (*) DO (echo %%A)
REM PAUSE

REM search for files with certain words in nthe name by using *word* or file extensions by using *.extension
REM FOR %%A IN (*text*) DO (echo %%A)
REM PAUSE

REM using parameter extensions, %%~xA for listing the files extension, %%~nA for it´s name, more exists
FOR %%A IN (*) DO (if "%%~xA" == ".bat" (echo %%A) else (echo no bat file, %%A))
PAUSE

REM using parameter extensions, %%~xA for listing the files extension, %%~nA for it´s name, more exists
FOR %%A IN (*) DO (if "%%~nA" == "*awesome*" (echo %%A) else (echo no bat file, %%A))
PAUSE

REM using parameter extensions, %%~xA for listing the files extension, %%~nA for it´s name, more exists
REM using them in an if statement
REM FOR %%A IN (*) DO if "%%~xA" == ".bat"(move %%A "bat_files") else (echo no bat file, move scipped)
REM PAUSE
:printDone
echo Done!