/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if(nums.length < 2) return nums.length
  
  var i = 0
  var j = 1
  
  while(j<nums.length){
    if(nums[j]!==nums[i]){
      nums[i+1] = nums[j]
      i++
    }
    j++
  }
  
  return i+1
};