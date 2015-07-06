//July6th :)
function mergeSort(arr){
  return helper(0, arr.length -1, arr)
}

function helper(start, end, arr){
  
  if(start === end){
    //this is a trick :)
    return [arr[start]]
  }

  var mid = Math.floor((start+end)/2)

  var l = helper(start, mid, arr)
  var r = helper(mid + 1, end, arr)

  return merge(l, r)
}

function merge(arr1, arr2){
  var result = []
  var i = 0
  var j = 0
  while(i < arr1.length && j < arr2.length){
    if(arr1[i]<arr2[j]){
      result.push(arr1[i])
      i++
    }else{
      result.push(arr2[j])
      j++
    }
  }
  while(i < arr1.length){
    result.push(arr1[i])
    i++
  }
  while(j < arr2.length){
    result.push(arr2[j])
    j++
  }
  return result
}

console.log(mergeSort([4, 6, 13, 6, 2, 7, 346, 15, 64, 246, 2, 6, 64]))