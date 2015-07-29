/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if(nums.length < 1) return 0
    var sum = 0
    var minSum = 0
    var max = -Infinity
    for(var i = 0; i < nums.length; i++){
        sum += nums[i]
        max = Math.max(max, sum - minSum)
        minSum = Math.min(sum, minSum)
    }
    return max
};