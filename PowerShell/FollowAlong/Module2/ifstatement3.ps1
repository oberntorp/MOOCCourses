'What user do you want to disable?'

$userList = Get-LocalUser

$userList

$userName = Read-Host

$userObject = Get-LocalUser -Name $userName

'At the moment user' + ' ' + 'is' + ' ' + $userObject.Enabled
if($userObject.Name -eq 'Administratör' -or $userObject.Name -eq 'obern')
{
    'You can not disable user' + ' ' + $userObject.Name
}

elseif($userObject.Enabled -eq $true)
{
    $userObject | Disable-LocalUser
    'User' + ' ' + $userObject.Name + ' ' + 'was disabled'
}

elseif($userObject.Enabled -eq $false)
{
    $userObject | Enable-LocalUser
    'User' + ' ' + $userObject.Name + ' ' + 'was enabled'
}
$userObject = Get-LocalUser -Name $userName

'Now the user' + ' ' + $userObject.Name + ' ' + 'is' + ' ' + $userObject.Enabled

