# Unlimited number of guesses
[int]$RandomNum = Get-Random -Minimum 1 -Maximum 3
'Give me a number:'
[int]$Guess = Read-Host

while ($RandomNum -ne $Guess) {
    'Guess was' + ' ' + $Guess
    'You guessed wrong, please try again' + ' ' + $Guess
    Start-Sleep -Seconds 1
    'Give me a number:'
    $Guess = Read-Host
}

'You guessed currect, the number to guess was' + ' ' + $RandomNum