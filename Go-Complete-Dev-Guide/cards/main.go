package main

func main() {
	// var card string = "Ace of Spades"

	// card can also be defined, the := operator is only used when a variable is first declared and it tells go to infer the type based on the assigned value (string in this case)
	//card := "Ace of Spades"
	cards := deck{"Ace od Diamonds", newCard()}
	cards = append(cards, "Six of Spades")
	cards.print()
}

func newCard() string {
	return "Five of diamonds"
}