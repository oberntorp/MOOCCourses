$DirsToCreate = Get-Content -Path '.\dirs.txt'

foreach ($dir in $DirsToCreate)
{
    if(-Not(Test-Path -Path $dir))
    {
        New-Item -Name $dir -Path 'C:\wamp64\www\GitHub\MOOCCourses\PowerShell\FollowAlong\Module2\Lesson21\' -ItemType 'directory'
    }
}

Get-Item -Path 'C:\wamp64\www\GitHub\MOOCCourses\PowerShell\FollowAlong\Module2\Lesson21\'