def mergeSort(list):

  if len(list)>1:
    mid = len(list) / 2
    lefthalf = list[:mid]
    righthalf = list[mid:]

    mergeSort(lefthalf)
    mergeSort(righthalf)

    i = j = index = 0

    while(i < len(lefthalf) and j < len(righthalf) ):
      if(lefthalf[i] >= righthalf[j]):
        list[index] = righthalf[j]
        j += 1
        index += 1
      else:
        list[index] = lefthalf[i]
        i += 1
        index += 1

    while(i < len(lefthalf)):
      list[index] = lefthalf[i]
      i += 1
      index += 1

    while(j < len(righthalf)):
      list[index] = righthalf[j]
      j += 1
      index += 1

    # for num in list:
    #   print num
    return list

  #return list_new

test1 = [ 4,6,13,6,2,7]
test2 = [5,3,135,3,6]

print mergeSort(test1)
print mergeSort(test2)
