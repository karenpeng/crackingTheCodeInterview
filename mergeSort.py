def divide(arr):
  #chop it in half
  max = len(arr)
  min = 0
  middle = ( max - min ) / 2

def mergesort():

  mergesort()

def combine(arr1, arr2):
  i = j = 0
  index = 0
  arr3 = []
  while(i < len(arr1)-1 || j < len(arr2)-1 ):
    if(arr1[i] >= arr2[j]):
      arr3[index] = arr2[j]
      j = j+1
      index=index+1
    else:
      arr3[index] = arr1[i]
      i = i+1
      index = index +1
    for num in arr3:
      print num
  return arr3

test1 = [ 4,6,13,6,2,7]
test2 = [5,3,135,3]
combine(test1, test2)
