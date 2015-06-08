function removeDuplicate(arr){
  var len = arr.length
  if(len < 2) return len

  var i = 0
  var j = 1

  while(i < len && j < len){

    if(arr[i] === arr[j]){
      j++
    }else{
      i++
      arr[i] = arr[j]
      j++
    }
  }

  return i + 1

}