$UsersToCreate = Get-Content -Path '.\users.txt'

$Password = ConvertTo-SecureString -String 'SecrecT!' -AsPlainText -Force
foreach($username in $UsersToCreate)
{
    New-LocalUser -Name $username -Password $Password
}

Get-LocalUser