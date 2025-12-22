@Echo off
echo Hello

SET var=1

echo printing var bellow
echo %var%
echo printing var bellow done
SET var=2

echo printing var bellow
echo %var%
echo printing var bellow done
SET /p prompt=Please enter a value

if %prompt%==1 (echo you entered 1) else if %prompt%==2 (echo you entered 2) else (echo Something else was entered)

GOTO myfunction

:myfunction
echo Inside myfunction
GOTO myfunction1

:myfunction1
echo Inside myfunction1

GOTO myfunctionDone
:myfunctionDone
echo Inside myfunctionDone
pause