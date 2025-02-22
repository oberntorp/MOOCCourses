$Services = Get-Service
foreach($Item in $Services){
   'The' + ' ' + $item.Name + ' ' + 'is a great service!'
   if($Item.Name -eq 'spooler'){
      'Wow, I found the spooler service! Really cool!'
   }
}
