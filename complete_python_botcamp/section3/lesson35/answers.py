#Numbers
print((((2**6) * 2) - 28)+0.25)
print(4*(6+5)) # 4*11 = = 44
print(4*6+5) # 24+5=29
print(4+6*5) # 4+30=34
print(type( 3 + 1.5 + 4)) # float
# to find a numbers squra, use the square function or the exponent operator **
print(5**2)
# To find the square rot use ** or math.sqrt or math.isqrt
print(25**0.5)
# strings, return e from the bellow string
s = "hello"
print(s[1:2])
# reverse s by using slicing
print(s[::-1])
# With indexin, give two ways of procucing o
print(s[-1])
print(s[4]) # can´t figure out the second way
# Lists
# Build a list of 0,0,0 in two ways
my_first_list = [0,0,0]
my_second_list = []
my_second_list.append(0)
my_second_list.append(0)
my_second_list.append(0)
# One the solutions came up, this is another way 
my_third_list = [0]*3
print("The first list with three 0s", my_first_list)
print("The second list with three 0s", my_second_list)
print("The thirs list with three 0s", my_third_list)
# Reassign 'hello' in this nested list to say 'goodbye' instead:
list3 = [1,2,[3,4,'hello']]
list3[2][2] = "goodbye"
print(list3[2][2])
# Sort the bellow list in two ways
list4 = [5,3,4,6,1]
# First method
print(list4.sort())
# Second method, not in place, returns it
print(sorted(list4))
# Dictionaries
# Using keys and indexing, grab the 'hello' from the following dictionaries:
d = {'simple_key':'hello'}
print(d["simple_key"])
# Getting a little tricker
d = {'k1':[{'nest_key':['this is deep',['hello']]}]}
#Grab hello
print(d['k1'][0]["nest_key"][1][0])
# This will be hard and annoying!
d = {'k1':[1,2,{'k2':['this is tricky',{'tough':[1,2,['hello']]}]}]}
# get hello from d
d['k1'][2]["k2"][1]["tough"][2][0]
# Tuples
# What is the major difference between tuples and lists?
# A touple cannot be changed (mutated)

# How do you create a tuple?
t = ("My",1,"tuple")
print(t)
# Sets
# What is unique about a set?
# A set can't contain duplicates

# Use a set to find the unique values of the list below:
list5 = [1,2,2,33,4,4,11,22,3,3,2]
unique_values = (set(list5))
print(unique_values)