'Please provide the name of a service to stop'

$serviceName = Read-Host

$choosenService = Get-Service -Name $serviceName

'choosen service is ' + $choosenService.Name

$choosenService.Name + ' ' + 'has status' + ' ' + $choosenService.Status

if($choosenService.Status -eq 'Running'){
    $choosenService | Stop-Service
    $choosenService.Name + ' ' + 'was' + ' ' + 'stopped'
} else {
        $choosenService | Start-Service
        $choosenService.Name + ' ' + 'was' + ' ' + 'started'
}

$choosenService.Name + ' ' + 'now has status' + ' ' + $choosenService.Status

