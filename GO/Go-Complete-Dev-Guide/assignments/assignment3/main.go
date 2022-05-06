package main

import (
	"fmt"
	"io"
	"os"
)

func main() {
	fileToOpen := os.Args[1]

	file, error := os.Open(fileToOpen)

	if error != nil{
		fmt.Println("Sorry, an error occured!")
		os.Exit(1)
	}

	// bs := make([]byte, 99999)
	// fmt.Println(file.Read(bs))

	// it can also be made like

	io.Copy(os.Stdout, file)

}