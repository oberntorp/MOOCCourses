$CSVOfUsersToCreate = Import-Csv -Path '.\users.csv'

$CSVOfUsersToCreate[0].LOGONNAME + ' ' + $CSVOfUsersToCreate[0].DESCRIPTION