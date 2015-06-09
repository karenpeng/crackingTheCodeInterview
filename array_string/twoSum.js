function twoSum(arr, target){
  if(arr.length < 2) return null
  var hash = {}
  for(var i = 0; i < arr.length; i++){
    //omg what's the difference???
    //if(hash[arr[i]]){
    if(hash[arr[i]] !== undefined) {
      console.log(arr[i], hash[arr[i]])
      return[hash[arr[i]]+1, i+1]
    }
    hash[target - arr[i]] = i
    console.log(hash)
  }
}

//console.log(twoSum([3, 2, 4], 6))
console.log(twoSum([0, 4, 3, 0], 0))