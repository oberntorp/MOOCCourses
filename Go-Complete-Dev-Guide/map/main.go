package main

import "fmt"

func main() {
	// There are meny ways of creating a map in go

	// 1)

	// The type in brackets are the key type, the type next to it is the value type
	// colors := map[string]string{"red": "#ff000", "green": "#4bf75"}

	// 2)

	// There are two ways to declare a map but not assigning values from the beginning

	// var colors map[string]string
	// or
	// colors := make(map[string]string)

	// To assign values if the declaration is done as above (on values from the start), this is the syntax to abb key/value pairs

	// The brackets syntax is also used to access a given value, unlike structs the keys are typed, meaning that the expression in the brackets must be of the right type, which would not be doable with the dotsyntax
	// colors["white"] = "#ffffff"

	// to delete a key/value pair, the delete function is used, it takes a map and the key to delete

	// delete(colors, "white")

	// fmt.Println(colors)

	// Itterating over a map

	colors := map[string]string{"red": "#ff000", "green": "#4bf75", "white": "#ffffff"}

	printMap(colors)
}

func printMap(c map[string]string) {
	for color, hex := range c {
		fmt.Println("Hex code of ", color, "is", hex)
	}
}