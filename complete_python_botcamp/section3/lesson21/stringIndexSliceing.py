mystring = "Hello World"
print(mystring[0])
print(mystring[8])
print(mystring[9])
myotherstring = "abcdefghijk"
#indexslicing start:stop:step, where stop is up until but not including
print(myotherstring[-2])
print(myotherstring[:3])
print(myotherstring[2:4])
#stepsize can be combined with start and stop
print(myotherstring[2:7:2])
# A trick to reverse a string in python, technically a slicing with step -1 takes the whole string in reverse order as the step value -1 is backwards
print(myotherstring[::-1])