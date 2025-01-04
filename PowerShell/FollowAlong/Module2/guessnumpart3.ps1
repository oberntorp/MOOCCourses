# Unlimited number of guesses, but this time with a hint of to high or low guess
[int]$RandomNum = Get-Random -Minimum 1 -Maximum 9
'Give me a number:'
[int]$Guess = Read-Host

while ($RandomNum -ne $Guess) {
    'Guess was' + ' ' + $Guess
    if ($Guess -lt $RandomNum) {
        'You guessed too low, please try again'
    }
    elseif ($Guess -gt $RandomNum) {
        'You guessed too high, please try again'
    }
    Start-Sleep -Seconds 1
    'Give me a number:'
    $Guess = Read-Host
}

'You guessed currect, the number to guess was' + ' ' + $RandomNum