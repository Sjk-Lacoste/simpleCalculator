"""This function sum up any amount of numbers."""
def add(*params):
    sum = 0

    # Loop through values and add with the sum.
    # pos is used for position of the value in a list
    for pos in range(0, len(params)):
        sum += params[pos]

    # Return the results to the user.
    return sum

"""This function multiply any amount of numbers."""
def multiply(*params):
    product = 1

    # Loop through values and multiply with the product.
    # pos is used for position of the value in a list
    for pos in range(len(params)):
        product *= params[pos]

    # Return the results to the user.
    return product
