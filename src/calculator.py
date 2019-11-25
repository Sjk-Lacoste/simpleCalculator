"""This function sum up any amount of numbers."""
def add(*params):
    sum = 0

    # Loop through values and add with the sum.
    for x in range(0, len(params)):
        sum += params[x]

    # Return the results to the user.
    return sum

"""This function multiply any amount of numbers."""
def multiply(*params):
    product = 1

    # Loop through values and multiply with the product.
    for x in range(len(params)):
        product *= params[x]

    # Return the results to the user.
    return product
