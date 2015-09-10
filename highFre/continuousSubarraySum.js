function continuousSubarraySum(nums){

  var sum = 0
  var haha = []

  for(var i = 0; i < nums.length; i++){
    sum += nums[i]
    haha.push({sum: sum, index: i})
  }

  haha.sort(function(a, b){
    return a.sum - b.sum
  })

  return [haha[0].index+1, haha[haha.length-1].index]

}

console.log(continuousSubarraySum([-3, 1, 3, -3, 4]))