def binarySearch(aList, targetValue):
    min = 0
    max = len(aList) - 1
    guess = (min + max) / 2
    bList = []

    if aList[guess] == targetValue:

        return guess

    elif aList[guess] > targetValue:

        bList = aList[min: guess - 1:]

    else:

        bList = aList[guess + 1: max:]

    binarySearch(bList, targetValue)

    return -1


test4 = [2, 2, 4, 6, 6, 6, 7, 13, 15, 64, 64, 246, 346]

binarySearch(test4, 6)
