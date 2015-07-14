/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    var start = 0
    var end = nums.length - 1
    while(start + 1 < end){
        var mid = Math.floor((start + end) / 2)
        if(target === nums[mid]) return mid
        if(nums[mid] < nums[end]){
            //unknown - sorted
            //to check if in sorted side
            if(target > nums[mid] && target <= nums[end]) start = mid
            else end = mid 
        }else{
            //sorted-unsorted
            //to check if in sorted side
            //to check the start!!! instead of end
            if(target >= nums[start] && target < nums[mid]) end = mid
            else start = mid
        }
    }
    if(nums[start] === target) return start
    if(nums[end] === target) return end
    return -1
};