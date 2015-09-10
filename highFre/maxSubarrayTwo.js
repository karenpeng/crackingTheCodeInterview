function maxSubArrayTwo(nums){
  var leftMax = []

  leftMax[0] = nums[0]
  var max = 0

  for(var i = 1; i < nums.length; i++){
    //current max
    max = Math.max(nums[i], max+nums[i])
    //historical max
    leftMax[i] = Math.max(leftMax[i-1], max)
  }

  max = 0
  var rightMax = []
  rightMax[nums.length-1] = nums[nums.length-1]
  for(var i = nums.length-2; i>=0; i--){
    max = Math.max(nums[i], max+nums[i])
    rightMax[i] = Math.max(rightMax[i+1], max)
  }

  max = 0
  for(var i = 0; i < nums.length-2; i++){
    max = Math.max(max, leftMax[i] + rightMax[i+1])
  }

  console.log(max)
  return max

}

maxSubArrayTwo( [1, 3, -1, 2, -1, 2])