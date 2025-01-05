'PowerShell'
'PowerShell'
'PowerShell'

'Please give me your name:'

$Name = Read-Host

'Welcome' + ' ' + $Name

'Please give me a service'

$Service = Read-Host

Get-Service -Name $Service