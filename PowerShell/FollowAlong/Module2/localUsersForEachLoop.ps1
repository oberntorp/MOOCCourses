$LocalUsers = Get-LocalUser

foreach($Item in $LocalUsers)
{
    'The user' + ' ' + $Item.Name + ' ' + 'has a description of' + ' ' + $Item.Description
}