/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    for(var i = 0; i < nums.length; i++){
        if(nums[i+1]!== undefined && nums[i] !== nums[i+1]){

          nums.splice(i, 2)
          console.log(nums.length)
        }
    }
    return nums[0]
};

majorityElement([8,8,7,7,7])