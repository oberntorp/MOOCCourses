'What service do you want to display?'

$ServiceName = Read-Host

$ServiceObject = Get-Service -Name $ServiceName

'The service name is' + ' ' + $ServiceObject.Name + ' ' + 'it has the status' + ' ' + $ServiceObject.Status

$ServiceObject | Get-Member