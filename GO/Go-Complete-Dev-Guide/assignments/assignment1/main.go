package main

import "fmt"

func main() {
	numbers := []int{0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10}

	for _, num := range numbers {
		evenOrOdd := ""

		if num % 2 == 0{
			evenOrOdd = "even"
		}else{
			evenOrOdd = "odd"
		}

		fmt.Println(num, " is "+ evenOrOdd)
	}
}