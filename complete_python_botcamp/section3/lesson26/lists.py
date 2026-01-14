my_list_numbers = [1,2,3,4,5]
my_list_strings = ["apple", "banana", "cherry"]
my_list_mixed = [1, "apple", 3.14, True]
my_concatenated_list = my_list_numbers + my_list_strings
my_concatenated_list[0] = "ONE"
print(my_concatenated_list)
# just like strings we can slice lists
print(my_concatenated_list[4:])
my_concatenated_list.append("new item")
print(my_concatenated_list)
my_concatenated_list.pop()
print(my_concatenated_list)
unsorted_list = [3, 1, 4, 2, 5]
print(unsorted_list)
# sorting and reversing lists in place, meaning the original list is changed, not a new list created, if you want a new list save it to a new variable
unsorted_list.sort()
print(unsorted_list)
unsorted_list.reverse()
print(unsorted_list)