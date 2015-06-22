/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    // for(var i = 0; i < nums.length; i++){
    //     if(nums[i-1]<nums[i]&&nums[i+1]<nums[i]) return i
    // }
    
    var s = 0
    var e = nums.length - 1
    if(e === -1) return 0
    
    var mid
    while(s + 1 < e){
        mid = Math.floor((s+e)/2)
        //比右边小 那么峰值在右边
        if(nums[mid] < nums[mid + 1]) s = mid + 1
        //比左边小 那么峰值在左边
        else if(nums[mid] < nums[mid - 1]) e = mid - 1
        //都不是 那么它自己就是峰值啦
        else return mid
    }
    if(nums[s] > nums[e]) return s
    return e
};