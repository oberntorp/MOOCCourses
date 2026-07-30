# A tuple is created by using parenteses, as opposed to lists which is created using []
t = (1,2,3)
mylist = [1,2,3]
# You can confirm a variables type, with the type function
print(type(t)) # Tuple
print(type(mylist)) # list
# the types in a tuple can be mixed like in a lists, and indexed in the same way
print(t[1], t[-1]) # 1 3
# Like lists, tuples can have their length checked, with the len function
t2 = ("My", "age", "is", 33)
print(len(t)) # 3
print(t2,len(t2)) # 3
# tuples have only two methods, index and count, index is for returning the index where the given value appears first
# count is to count the number of appearenses of a given value
print(t.index(1)) # 0
print(t.count(1)) # 1
# As you can guess, a tuple and a list is quite the same in meny ways, but differs in that
# Lists are mutable
print(mylist)
mylist[0] = "NEW"
print(mylist)
# tuples are not, bellow gives an error
print(t)
t[0] = "NEW"
