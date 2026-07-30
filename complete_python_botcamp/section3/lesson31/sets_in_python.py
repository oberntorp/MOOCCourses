# sets are unordered collections of unique items, it is created by
myset = set()
# Add items with the add function
myset.add(1)
myset.add(2)
myset.add(3)
print(myset)
# If trying to add a value a second time, it will not be repeated
myset.add(3)
print(myset)
# Sets can be used to cast a list to a set, and get trhe unique values
mylist = [1,1,2,2,3,3]
unique_values_of_list = set(mylist)
print(unique_values_of_list)
# Strings can be used to get the unique letters
unique_letters = set("Mississippi")
print(unique_letters)