package main

func main() {
	// var card string = "Ace of Spades"

	// card can also be defined, the := operator is only used when a variable is first declared and it tells go to infer the type based on the assigned value (string in this case)
	//card := "Ace of Spades"
	// cards := newDeck()
	// hand, remainingCards := deal(cards, 3)
	// hand.print()
	// remainingCards.print()

	// greeting := "Hi There!"

	// fmt.Println([]byte(greeting))

	cards := newDeckFromFile("my_cards.txt")
	cards.shuffle()
	cards.print()
}