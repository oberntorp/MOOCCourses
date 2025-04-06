$CSVOfUsersToCreate = Import-Csv -Path '.\users.csv'

foreach($User in $CSVOfUsersToCreate)
{
    $Password = ConvertTo-SecureString -String $User.PASSWORDOFUSER -AsPlainText -Force
    New-LocalUser -Name $User.LOGONNAME -Password $Password -Description $User.DESCRIPTION
}

Get-LocalUser