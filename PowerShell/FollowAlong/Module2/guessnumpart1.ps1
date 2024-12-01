[int]$RandomNum = Get-Random -Minimum 1 -Maximum 3
'Give me a number:'
[int]$Guess = Read-Host

if($RandomNum -eq $Guess){
    'Guess was' + ' ' + $RandomNum
    'You guessed currect, you guessed' + ' ' + $Guess
} else {
    'Sorry, your guess' + ' ' + $Guess + ' ' + 'was not right,' + ' ' + $RandomNum + ' ' + 'had been currect'
}