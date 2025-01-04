[datetime]$currentDate = Get-Date
[string]$dayToCheckFor = 'Wednesday'
'DayOfWeek is' + ' ' + $currentDate.DayOfWeek
 while ($currentDate.DayOfWeek -ne $dayToCheckFor) {
    'It is'+ ' ' + $currentDate.DayOfWeek + ' ' + 'not Wednesday'
    $dayToCheckFor = 'Wednesday'
    $currentDate = Get-Date
    Start-Sleep -Milliseconds 1000
 }

'It is' + $dayToCheckFor
