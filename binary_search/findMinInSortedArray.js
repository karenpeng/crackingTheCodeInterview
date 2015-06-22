/**
 * @param {number[]} nums
 * @return {number}
 */
//思路： 最小值永远在unsorted的那段：）
var findMin = function(nums) {
    var s = 0
    var e = nums.length -1
    if(e === 0) return nums[0]
    if(e === -1) return null
    
    var mid
    while(s + 1 < e){
        mid = Math.floor((s+e)/2)
            
        //unknown - sorted
        if(nums[mid] < nums[e]){
            e = mid
            
        //sorted = unknow    
        }else{
            s = mid
        }
    }
    if(nums[s] > nums[e]) return nums[e]
    return nums[s]
   
};