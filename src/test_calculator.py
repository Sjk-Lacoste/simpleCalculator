from calculator import *

# Add two values
def test_add_two_numbers():
    assert add(1,2) == 3

# Add tmultiple values
def test_add_many_numbers():
    assert add(1,2,3,4) == 10

# Multiply two values
def test_multiply_two_numbers():
    assert multiply(1,2) == 2

# Multiply many values
def test_multiply_many_numbers():
    assert multiply(1,2,3,4) == 24