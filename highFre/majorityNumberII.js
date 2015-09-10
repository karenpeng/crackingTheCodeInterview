/**
* @param {number[]} nums
* @return {number[]}
*/
var majorityElement = function(nums) {
  var candidate1 = 0
  var candidate2 = 0
  var count1 = 0
  var count2 = 0
  for(var i = 0; i < nums.length; i++){
    if(candidate1 === nums[i]) count1++
    else if (candidate2 === nums[i]) count2++
    else if(count1 === 0){
      candidate1 = nums[i]
      count1 = 1
    }else if(count2 === 0){
      candidate2 = nums[i]
      count2 = 1
    }else{
      count1 --
      count2 --
    }
  }
  
  count1 = 0
  count2 = 0
  for(var i = 0; i < nums.length; i++){
    if(nums[i] === candidate1) count1 ++
    if(nums[i] === candidate2) count2 ++
  }
  var output = []
  if(count1 > nums.length/3) output.push(candidate1)
  if(count2 > nums.length/3 && candidate1 !== candidate2) output.push(candidate2)
  return output
};