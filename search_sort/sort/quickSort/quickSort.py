def quickSort(aList):

    _quickSort(aList, 0, len(aList))


def _quickSort(aList, first, last):

    if first >= last:

        return

    else:

        pivot = partition(aList, first, last)
        # print pivot

        _quickSort(aList, first, pivot - 1)
        _quickSort(aList, pivot, last)


def partition(aList, first, last):
    pivot = aList[first]
    print 'pivot'
    print pivot
    lessIndex = first + 1

    for moreIndex in range(lessIndex, last):

        if aList[moreIndex] <= pivot:

            swap(aList, lessIndex, moreIndex)

            lessIndex += 1

    swap(aList, first, lessIndex - 1)

    print aList

    return lessIndex


def swap(aList, x, y):
    temp = aList[y]
    aList[y] = aList[x]
    aList[x] = temp


test1 = [4, 6, 13, 6, 2, 7, 346, 15, 64, 246, 2, 6, 64]
test2 = [5, 3, 135, 3, 6]
test3 = [1]

quickSort(test1)
# quickSort(test2)
# quickSort(test3)
# print quickSort(test1)
# print quickSort(test2)
# print quickSort(test3)

print 'lol'
print test1
# print test2
# print test3
