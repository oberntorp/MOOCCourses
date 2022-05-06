package main

import "fmt"

type contactInfo struct {
	enail   string
	zipCode int
}

type person struct {
	firstName   string
	lastName    string
	contactInfo // <- If i want, a struct can also be embedded by simply only adding the type (contact info in this case), it is equivalent to writing contactInfo contactInfo
	// contactInfo contactInfo
	// contact: contactIcontactInfo
}

func main() {

	// There are different ways of defining a struct

	// The first way is dependent upon the order of the fields in the struct (which is not reliable, since swapping field order would cause the values to be wrongly assigned)
	// alex := person{"Alex", "Andersson"}

	// The second way means that you have a key, value pair separated with ":"
	// alex := person{firstName: "Alex", lastName: "Andersson"}

	// The fird way is to first declare the variable and not assign any values, the properties of the struct would be assigned it´s zero values (default values)
	// var alex person

	// If the struct has been declared in the above way, it is assigned values like this, which is also the way of updating an already defined struct or accessing the properties

	// alex.firstName = "Alex"
	// alex.lastName = "Andersson"

	// In this case print alex will yield an empty struct (since there is nothing in the strings)
	// fmt.Println(alex)

	// To print a struct with the key value pair, use this syntax

	// fmt.Printf("%+v", alex)

	// A struct with an embedded struct is defined like this

	jim := person{firstName: "Jim", lastName: "Party", contactInfo: contactInfo{enail: "jim@gmail.com", zipCode: 94000}}

	// A pointer is defined like this (pointer to jim)
	jimPointer := &jim
	jimPointer.updateName("Jimmy")
	jim.print()

}

// The receuver function works on the pointer
func (pointerToPerson *person) updateName(newFirstName string) {
	(*pointerToPerson).firstName = newFirstName
}

func (p person) print() {
	fmt.Printf("%+v", p)
}
