package main

import (
	"os"
	"testing"
)

func TestNewDeck (t *testing.T)  {
	d := newDeck()
	if len(d) != 16{
		t.Errorf("Expected a deck of length 16, got %v", len(d))
	}

	if d[0] != "Ace of Spades"{
		t.Errorf("Expected first card of Ace of Spades, got %v",d[0])
	}

	if d[len(d)-1] != "Four of Clubs"{
		t.Errorf("Expected last card of Four of Clubs, got %v",d[len(d)-1])
	}
}

func TestSaveToDeckAndNewDeckFromFile(t *testing.T){
	os.Remove("_decktesting")
	d := newDeck()
	d.saveToFile("_decktesting")
	loadedDeck := newDckFromFile("_decktesting")

	if len(loadedDeck) != 16{
		t.Errorf("Expected loaded deck of length 16, but got %v",len(loadedDeck))
	}

	os.Remove("_decktesting")
}