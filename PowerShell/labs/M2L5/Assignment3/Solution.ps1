$UsersOfCSV = Import-Csv -Path '.\users.csv'

foreach($User in $UsersOfCSV)
{
    if($User.DEPARTMENT -eq 'EvilWizards')
    {
        'This user cannot be imported because the Deportment is EvilWizards!!'
    }
    else 
    {
        $SecurePassword = ConvertTo-SecureString -String $User.PASSWORD -AsPlainText -Force
        New-LocalUser -Name $User.LOGINNAME -Password $SecurePassword -Description $User.DEPARTMENT
    }
}

Get-LocalUser