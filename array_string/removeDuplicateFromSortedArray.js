/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(nums.length < 2) return nums.length
    
    var i = 0
    var j = 1
    //装满不是相同的元素就可以了，不用管后面:)
    while(j<nums.length){
        if(nums[j]!==nums[i]){
            //assign
            nums[i+1] = nums[j]
            i++
        }
        j++
    }
    
    return i+1
};