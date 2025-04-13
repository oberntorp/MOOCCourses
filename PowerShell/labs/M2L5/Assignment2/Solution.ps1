$UsersOfCSV = Import-Csv -Path '.\users.csv'

foreach($User in $UsersOfCSV)
{
    if($User.DEPARTMENT -eq 'EvilWizards')
    {
        [string] $ShouldImport = Read-Host 'Should the user' + ' ' + $User.LOGINNAME + ' ' + 'be created? Y/N'
        if($ShouldImport -eq 'Y')
        {
            $SecurePassword = ConvertTo-SecureString -String $User.PASSWORD -AsPlainText -Force
            New-LocalUser -Name $User.LOGINNAME -Password $SecurePassword -Description $User.DEPARTMENT
        }
        else 
        {
            'User' + ' ' + $User.LOGINNAME + 'was not created'
        }
    } else 
    {
        $SecurePassword = ConvertTo-SecureString -String $User.PASSWORD -AsPlainText -Force
            New-LocalUser -Name $User.LOGINNAME -Password $SecurePassword -Description $User.DEPARTMENT
    }   
}

Get-LocalUser