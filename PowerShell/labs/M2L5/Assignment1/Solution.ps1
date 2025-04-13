$UsersOfCSV = Import-Csv -Path '.\users.csv'

foreach($User in $UsersOfCSV)
{
    $SecurePassword = ConvertTo-SecureString -String $User.PASSWORD -AsPlainText -Force
    New-LocalUser -Name $User.LOGINNAME -Password $SecurePassword -Description $User.DEPARTMENT
}

Get-LocalUser