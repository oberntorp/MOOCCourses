package main

import "fmt"

type bot interface {
	getGreeting() string
}
type englishBot struct{}
type spanishBot struct{}

func main() {
	var eb englishBot = englishBot{}
	var sb spanishBot = spanishBot{}

	printGreeting(eb)
	printGreeting(sb)
}

// If not using the receiver value, it can be omitted and just the type is needed
func (eb englishBot) getGreeting() string {
	return "Hi There!"
}

func printGreeting(b bot) {
	fmt.Println(b.getGreeting())
}

func (eb spanishBot) getGreeting() string {
	return "Holla!"
}
