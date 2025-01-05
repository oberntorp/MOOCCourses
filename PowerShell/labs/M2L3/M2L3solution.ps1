[datetime]$CurrentDate = Get-Date
[string]$DayToCheckFor = 'Wednesday'
'DayOfWeek is' + ' ' + $CurrentDate.DayOfWeek
 while ($CurrentDate.DayOfWeek -ne $DayToCheckFor) {
    'It is'+ ' ' + $CurrentDate.DayOfWeek + ' ' + 'not Wednesday'
    $DayToCheckFor = 'Wednesday'
    $CurrentDate = Get-Date
    Start-Sleep -Milliseconds 1000
 }

'It is' + $DayToCheckFor
