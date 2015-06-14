/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if(nums.length === 1) return nums[0]
    var max = -Infinity
    var sum = 0
    for(var i =0; i<nums.length;i++){
        sum += nums[i]
        console.log(sum, max)
        if(sum >= max) {
           max = sum
           console.log(max)
        }
        //this is the tricky part!!! if sum is less than zero
        //no need to sum any more
        if(sum<0){
           sum = 0
        }
    }
    return max
};

maxSubArray([-2,-1])