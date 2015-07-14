function quickSort2(arr){

 partition(0, arr.length-1, arr)

 return arr

}

function partition(start, end, arr){

  if(start === end) return
  if(start > end) return

  var pivot = arr[start]

  var i = start + 1 
  var j = start + 1


  for(; j <= end; j++){
    if(arr[j] < pivot){
      swap(arr, j, i)
      i++
    }

  }

  swap(arr, start, i - 1)
  
  partition(start, i - 1, arr)
  partition(i, end, arr)

}

function swap(arr, a, b){
  var tem = arr[a]
  arr[a] = arr[b]
  arr[b] = tem
}

console.log(quickSort2([4, 6, 13, 2, 7, 346, 15, 64, 246, 2, 6, 64]))
console.log(quickSort2([2,1]))