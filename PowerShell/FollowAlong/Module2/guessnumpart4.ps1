# Unlimited number of guesses, but this time with a hint of to high or low guess
[int]$TriesLeft = 3
[bool]$lost = $false
[int]$RandomNum = Get-Random -Minimum 1 -Maximum 5

'Give me a number:'
[int]$Guess = Read-Host

while ($RandomNum -ne $Guess -and $TriesLeft -gt 0) {
    'Guess was' + ' ' + $Guess
    if ($Guess -lt $RandomNum) {
        'You guessed too low, please try again' + ' ' + $TriesLeft + ' ' + 'tries left'
        $lost = $true
    }
    elseif ($Guess -gt $RandomNum) {
        'You guessed too high, please try again'
        $lost = $true
    }
    $TriesLeft -= 1
    Start-Sleep -Seconds 1
    'Give me a number:'
    $Guess = Read-Host
}

if ($lost -eq $true) {
    'You guessed currect, the number to guess was' + ' ' + $RandomNum + '.' + ' ' + 'You had' + ' ' + $TriesLeft + ' ' + 'tries left.'
}
else {
    'You lost, the number was,' + ' ' + $RandomNum

}