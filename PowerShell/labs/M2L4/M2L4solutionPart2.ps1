$Services = Get-Service
foreach ($Item in $Services) {
   if ($Item.Name -eq 'spooler') {
      'Wow, I found the spooler service! Really cool!'
   }
   else {
      'The' + ' ' + $item.Name + ' ' + 'is a great service!'
   }
}