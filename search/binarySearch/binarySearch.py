def binarySearch(aList, targetValue):
    min = 0
    max = len(aList) - 1
    guess = (min + max) / 2

    print guess

    if max < 1:

        return -1

    else:

        if aList[guess] == targetValue:

            return guess

        elif aList[guess] > targetValue:

            aList = aList[min: guess - 1:]

        else:

            aList = aList[guess + 1: max:]

        binarySearch(aList, targetValue)


test4 = [2, 2, 4, 6, 6, 6, 7, 13, 15, 64, 64, 246, 346]

print binarySearch(test4, 6)
