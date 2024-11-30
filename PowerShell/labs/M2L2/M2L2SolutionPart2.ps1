'Please provide the name of a service to stop'

$serviceName = Read-Host

$choosenService = Get-Service -Name $serviceName

'choosen service is ' + $choosenService.Name

$choosenService.Name + ' ' + 'has status' + ' ' + $choosenService.Status

if ($choosenService.Status -eq 'Running') {
    'The service' + ' ' + 'is' + ' ' + 'running should it be stopped (Y/N)?'
    $shouldStop = Read-Host
    if ($shouldStop -eq 'Y') {
        $choosenService | Stop-Service
        $choosenService.Name + ' ' + 'was' + ' ' + 'stopped'
    }
}
else {
    'The service' + ' ' + 'is' + ' ' + 'stopped should it be started (Y/N)?'
    $shouldStop = Read-Host
    if ($shouldStop -eq 'Y') {
        $choosenService | Start-Service
        $choosenService.Name + ' ' + 'was' + ' ' + 'started'

    }
}

$choosenService.Name + ' ' + 'now has status' + ' ' + $choosenService.Status

