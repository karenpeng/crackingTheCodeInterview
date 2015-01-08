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
  while(index < len(arr1) + len(arr2)):
    if(arr1[i] >= arr2[j]):
      arr3[index] = arr2[j]
      j++
      index++
    else
      arr3[index] = arr1[i]
      i++
      index++
  return arr3


