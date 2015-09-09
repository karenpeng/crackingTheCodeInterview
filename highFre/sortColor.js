/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    
    var i = 0
    var j = 0
    var k = nums.length -1
    
    //important!!!
    //不要忘了等于！！！
    while(j <= k){
        if(nums[j] === 0){
            nums[j] = nums[i]
            nums[i] = 0
            i++
            j++
        }else if(nums[j]===2){
            nums[j] = nums[k]
            nums[k] = 2
            k--
        }else{
            j++
        }
    }
};