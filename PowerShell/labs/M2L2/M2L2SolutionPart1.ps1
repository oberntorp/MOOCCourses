'Please provide the name of a service to stop'

$ServiceName = Read-Host

$ChoosenService = Get-Service -Name $ServiceName

'choosen service is ' + $ChoosenService.Name

$ChoosenService.Name + ' ' + 'has status' + ' ' + $ChoosenService.Status

if($ChoosenService.Status -eq 'Running'){
    $ChoosenService | Stop-Service
    $ChoosenService.Name + ' ' + 'was' + ' ' + 'stopped'
} else {
        $ChoosenService | Start-Service
        $ChoosenService.Name + ' ' + 'was' + ' ' + 'started'
}

$ChoosenService.Name + ' ' + 'now has status' + ' ' + $ChoosenService.Status

