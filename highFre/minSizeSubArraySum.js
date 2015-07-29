/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
    if(nums.length < 1) return 0
    var i = 0
    var j = 0
    var sum = 0
    var result = Infinity
    for(var i = 0; i < nums.length; i++){
        while(j < nums.length && sum < s){
            sum += nums[j]
            j++
        }
        if(sum >= s){
            result = Math.min(result, j - i) 
            sum -= nums[i]
        }
    }
    if(result === Infinity) return 0
    return result
};