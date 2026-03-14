# creating a simple dictionary, a dictionary is a list of key/value pairs, that can´t be sorted or accessed by a index, but with a name (key)
my_dict = {"key1": "value1", "key2": "value2", "key3": "value3"}
# The keys are always strings, whereas the values can be of any type, and accessed like so: dict_name["key_name"]
print(f"Printing my_dict key1: {my_dict["key1"]}")
# An example of prices
prices_lookup = {"apple": 2.99, "oranges": 1.99, "milk": 5.90}
print("What is the prices of apples? {}".format(prices_lookup["apple"]))
# Then we can also store any other valuetypes in a dictionary
my_other_dict = {"k1": "Hi", "k2": [1,2,3,4,5], "k4": "A", "k5": "c"}
# They can be accessed like arrays, with chaining on [key] for deeper levels
print("They can be accessed like arrays, with chaining on [key] for deeper levels in this case accessing k2 och index 3 in it´s array ",my_other_dict["k2"][3])
# Accessing letters and making string manipulation on them
print("Accessing letters and making string manipulation on them key4 and key5, making the letter A lower case and c upper case ",my_other_dict["k4"].lower(), my_other_dict["k5"].upper())
# how to add a new key to a dictionary
new_dict = {"key1": 100, "key2":200}
new_dict["key3"] = 300
print(new_dict["key3"])
# Overwrite a value
new_dict["key3"] = 500
print(new_dict["key3"])
# return keys, values or pairs, the pair is returned as a Tuple, it will be covered in lesson30
print(new_dict.keys())
print(new_dict.values())
print(new_dict.items())