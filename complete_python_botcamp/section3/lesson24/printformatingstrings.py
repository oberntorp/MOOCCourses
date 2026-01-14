print("This is a string {}".format("INSERTED"))
# String insertion by not index number
print("The {} {} {}".format("Brown" ,"Quick", "Fox"))
# String insertion by index number
print("The {1} {0} {2}".format("Brown" ,"Quick", "Fox"))
# String insertion by index number, but with keywords instead
print("The {q} {b} {f}".format(b = "Brown" ,q = "Quick", f = "Fox"))
# Float formatting, with this format  num:lengthof space.precision emediately followed by f
result = 100/777
print("The result was {r:1.3f}".format(r = result))
# Formatting can be done by having a character before the length of the space, for example 0 to fill with zeros, aligning to the right > or left < within the space or ^ to center
result = 100/777
result2 = 100/777
print("The result was {r:->10.3f} left aligned with '-' as filling for the spaces".format(r = result))
print("The result was {r:-<10.3f} right aligned with '-' as filling for the spaces".format(r = result))
print("The result was {r:-^10.3f} center aligned with '-' as filling for the spaces".format(r = result))
# With f-strings
print("f-string used: The result was {result:->10.3f} left aligned with '-' as filling for the spaces")
print("The result was {result:-<10.3f} resultight aligned with '-' as filling for the spaces")
print("The result was {result:-^10.3f} center aligned with '-' as filling for the spaces")
# Float formatting, with this format  num:length of space.precision emediately followed by f, without the precision, it works on both numbers and strings
print("The result was {h:60} {y:40}".format(h = "Hi", y = "You"))
print("The result was {h:60} {y:40}".format(h = "Hi", y = "You"))
#A newer way of using string interpolation called f-strings, available in python 3.6+
h = "Hi"
y = "You"
print(f"The result was {h} {y}")
name = "Sam"
age = 3
print(f"{name} is {age} years old")