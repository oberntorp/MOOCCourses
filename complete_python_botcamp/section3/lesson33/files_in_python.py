# Open file whitch the open method
myfile = open("myfile.txt")
# A file is read in this way, handle (variable name.read())
print("File contents first time " + myfile.read())
#If read a second time an empty string is returned as the curser in the file is on the last column, so file.seek() needs to be called first, with a position of 0, which basically means resetting the reading position
myfile.seek(0)
print("File contents after seek 0" + myfile.read())
# The wrong file name or path gets you error number 2 (no such file)
# myfile = open("whoops_wrong.txt")

# The read method read all content as a single string, if we want the content as a list of lines, we use readlines
print("All fines as a list")
print(myfile.readlines())
# A file is closed in the bellow way
myfile.close()
# One can also use this syntax to not need to close the file with open(filename) as variable name:
with open("myfile.txt") as my_new_file:
    #All code here
    contents = my_new_file.read()
    print("Print contents")
    print(contents)

# r, w or write, read or read and write, add the moode parameter to open with r or r+
with open("my_new_file.txt", mode="r") as my_new_file:
    #All code here
    contents = my_new_file.read()
    print("Print contents")
    print(contents)
# To append, sed mode=a
with open("my_new_file.txt", mode="a") as my_new_file:
    #All code here
    my_new_file.write("Rour on fourth")

with open("my_new_file.txt", mode="r") as my_new_file:
    #All code here
    contents = my_new_file.read()
    print("Print contents after appending")
    print(contents)
# Write mode alse takes care of creating or overwriting a file thus no error if a non existent file is accessed
with open("my_nonexistent_file.txt", mode="w") as my_new_file:
    #All code here
    contents = my_new_file.write("I created this file!")

with open("my_nonexistent_file.txt", mode="r") as my_new_file:
    #All code here
    contents = my_new_file.read()
    print("Print contents after writing")
    print(contents)