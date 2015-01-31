def quickSort(aList):

    _quickSort(aList, 0, len(aList) - 1)


def _quickSort(aList, first, last):

    if first < last:
        pivot = partition(aList, first, last)
        # print pivot

        _quickSort(aList, first, pivot - 1)
        _quickSort(aList, pivot + 1, last)


def partition(aList, first, last):
    pivot = aList[first]
    print 'pivot'
    print pivot
    left = first + 1
    right = last
    done = False

    while not done:
        while left <= right and aList[left] <= pivot:
            left += 1
        while left <= right and aList[right] >= pivot:
            right -= 1
        if right < left:
            # print ' ! '
            done = True
        else:
            swap(aList, left, right)
            # print aList

    print aList
    swap(aList, first, last)
    print aList
    print '!'
    return right


def swap(aList, x, y):
    temp = aList[y]
    aList[y] = aList[x]
    aList[x] = temp


test1 = [4, 6, 13, 6, 2, 7]
test2 = [5, 3, 135, 3, 6]
test3 = [1]

quickSort(test1)
# quickSort(test2)
# quickSort(test3)
# print quickSort(test1)
# print quickSort(test2)
# print quickSort(test3)

# print test1
# print test2
# print test3
