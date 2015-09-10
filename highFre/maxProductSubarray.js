/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    var output = nums[0]
    var max = nums[0]
    var min = nums[0]
    for(var i = 1; i < nums.length; i++){
        var temp = max
        max = Math.max(nums[i], Math.max(max * nums[i], min * nums[i]))
        min = Math.min(nums[i], Math.min(temp * nums[i], min * nums[i]))
        output = Math.max(output, max)
    }
    return output
};