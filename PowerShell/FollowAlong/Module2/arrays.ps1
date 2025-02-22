# Create an array
$Array = @()
#Assign to an array like adding on to string in php or js
$Array += 'Erik'
$Array += 'Kerstin'
$Array += 'Johan'
$Array += 'Gustav'
$Array += 'Karl'
$Array += 'Karolina'
$Array += 'Magnus'
$Array += 'Oskar'

foreach ($item in $Array) {
    if ($item -ne 'Oskar') {
        'My name is' + ' ' + $item
    }
    else {
        'My name is' + ' ' + $item + ' ' + 'and I am the youngest'
    }
}

