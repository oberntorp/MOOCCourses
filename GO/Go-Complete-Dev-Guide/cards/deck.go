package main

import (
	"fmt"
	"io/ioutil"
	"math/rand"
	"os"
	"strings"
	"time"
)

// deck is a slice of strings, an array would be of a fixed size, a slice can grow and shrink
type deck []string

func newDeck() deck{
	cards := deck{}
	cardSuits := []string{"Spades", "Diamonds", "Hearts", "Clubs"}
	cardValues := []string{"Ace", "Two", "Three", "Four"}

	for _, suit := range cardSuits{
		for _, value:= range cardValues{
			cards = append(cards, value+" of "+suit)
		}
	}

	return cards
}

func (d deck) print() {
	for i, card := range d {
		fmt.Println(i, card)
	}
}

func deal(d deck, handSize int) (deck, deck){
	return d[:handSize], d[handSize:]
}

func (d deck) toString()string{
	return strings.Join([]string(d), ",")
}

func (d deck) saveToFile(fileName string) error{
	return ioutil.WriteFile(fileName, []byte(d.toString()), 0666)
}

func newDeckFromFile(fileName string) deck{
	bs, err := ioutil.ReadFile(fileName)
	if err != nil{
		fmt.Println("Error", err)
		os.Exit(1)
	}

	sliceOfString :=strings.Split(string(bs), ",")

	return deck(sliceOfString)
}

func (d deck) shuffle(){
	source:=rand.NewSource(time.Now().UnixNano())
	r := rand.New(source)
	for i := range d{
		newPosition := r.Intn(len(d)-1)

		d[i], d[newPosition] = d[newPosition], d[i]
	}
}