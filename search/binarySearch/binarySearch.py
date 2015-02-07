def binarySearch(aList, min, max, targetValue):

    print min
    print '~~~'
    print max
    print '\n----------\n'

    if max < min:

        print 'end'
        return -1

    else:

        guess = (min + max) / 2

        print guess

        if aList[guess] == targetValue:

            return guess

        elif aList[guess] > targetValue:

            #aList = aList[min: guess - 1:]
            max = guess - 1

        else:

            #aList = aList[guess + 1: max:]
            min = guess + 1

        binarySearch(aList, min, max, targetValue)


test4 = [2, 2, 4, 6, 6, 6, 7, 13, 15, 64, 64, 246, 346]

print binarySearch(test4, 0, len(test4) - 1, 6)
