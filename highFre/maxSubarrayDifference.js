// Given an array with integers.
// Find two non-overlapping subarrays A and B, which |SUM(A) - SUM(B)| is the largest.
// Return the largest difference.

//http://www.lintcode.com/en/problem/maximum-subarray-difference/

function maxDiffSubArrays(nums) {
  //write your code
  var leftMin = [];
  var leftMax = [];
  var max = nums[0];
  var min = nums[0];
  leftMin[0] = nums[0]
  leftMax[0] = nums[0]

  for(var i = 1; i < nums.length; i++){
    //current max and min
    max = Math.max(nums[i], nums[i]+max);
    min = Math.min(nums[i], nums[i]+min);
    
    //max and min in history
    //把这种最大最小累积起来了
    leftMax[i] = Math.max(max, leftMax[i-1]);
    leftMin[i] = Math.min(min, leftMin[i-1]);
  }

  var rightMin = [];
  var rightMax = [];

  max = nums[nums.length-1];
  min = nums[nums.length-1];
  rightMax[nums.length-1] = nums[nums.length-1]
  rightMin[nums.length-1] = nums[nums.length-1]

  for(var i = nums.length -2; i >=0;  i--){
    max = Math.max(nums[i], nums[i]+max);
    min = Math.min(nums[i], nums[i]+min);
    
    rightMax[i] = Math.max(max, rightMax[i+1]);
    rightMin[i] = Math.min(min, rightMin[i+1]);
  }

  console.log(leftMax)
  console.log(leftMin)

  console.log(rightMax)
  console.log(rightMin)

  max = 0;
  for(var i = 0; i < nums.length -1; i++){
    max = Math.max(max, Math.abs(leftMax[i] - rightMin[i+1]));
    max = Math.max(max, Math.abs(leftMin[i] - rightMax[i+1]));
  }
  console.log(max)
  return max;
}

//test2 is a failure
function test2(nums){

  var max = 0
  var min = 0
  var sum = 0

  var leftMax = []
  var leftMin = []

  for(var i = 0; i < nums.length; i++){
    sum += nums[i]
    max = Math.max(max, sum - min)
    min = Math.min(sum, min)
    leftMax[i] = max
    leftMin[i] = min
  }

  max = 0
  min = 0
  sum = 0
  var rightMax = []
  var rightMin = []

  for(var i = nums.length - 1; i >= 0; i--){
    sum += nums[i]
    max = Math.max(max, sum - min)
    min = Math.min(sum, min)
    rightMax[i] = max
    rightMin[i] = min
  }

  console.log(leftMax)
  console.log(leftMin)

  console.log(rightMax)
  console.log(rightMin)

  max = 0;
  for(var i = 0; i < nums.length -1; i++){
    max = Math.max(max, Math.abs(leftMax[i] - rightMin[i+1]));
    max = Math.max(max, Math.abs(leftMin[i] - rightMax[i+1]));
  }
  console.log(max)
  return max;

}

// maxDiffSubArrays([-5, -4])
maxDiffSubArrays( [1, 2, -3, 1])
console.log('~~~~~')
test2( [1, 2, -3, 1])



