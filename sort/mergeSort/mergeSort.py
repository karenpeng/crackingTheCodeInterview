def mergeSort(aList):

    print aList

    if len(aList) <= 1:

        return

    else:

        mid = len(aList) / 2
        lefthalf = aList[:mid]
        righthalf = aList[mid:]

        mergeSort(lefthalf)
        mergeSort(righthalf)

        i = 0
        j = 0
        index = 0

        while i < len(lefthalf) and j < len(righthalf):
            if(lefthalf[i] >= righthalf[j]):
                aList[index] = righthalf[j]
                j += 1
                index += 1
            else:
                aList[index] = lefthalf[i]
                i += 1
                index += 1

        while i < len(lefthalf):
            aList[index] = lefthalf[i]
            i += 1
            index += 1

        while j < len(righthalf):
            aList[index] = righthalf[j]
            j += 1
            index += 1


test1 = [4, 6, 13, 6, 2, 7]
test2 = [5, 3, 135, 3, 6]
test3 = [1]

mergeSort(test1)
# mergeSort(test2)
# mergeSort(test3)

# print test1
# print test2
# print test3
