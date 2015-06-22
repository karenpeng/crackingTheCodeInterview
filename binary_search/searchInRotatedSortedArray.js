/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    // var s = 0
    // var e = nums.length -1
    // if(e === 0) {
    //     if(nums[0] === target) return 0
    //     else return -1
    // }
    // var mid
    // while(s <= e){
        
    //     if(s+1>=e){
    //         if(nums[s]===target)return s
    //         if(nums[e]===target)return e
    //         return -1
    //     }
        
    //     mid = Math.floor((s+e)/2)
    //     if(nums[mid]===target)return mid
        
    //     //sorted-unknown
    //     if(nums[mid]>nums[s]){
    //         if(target >= nums[s] && target < nums[mid]) e = mid -1 //it's in the sorted side
    //         else s = mid + 1
        
    //     //unsorted-sorted   
    //     }else{
    //         if(target > nums[mid] && target <= nums[e]) s = mid + 1 //it's in the sorted side
    //         else e = mid - 1
    //     }
    // }
    // return -1
    
    // var s = 0
    // var e = nums.length - 1
    // if(e === -1) return -1
    
    // var mid
    // var minIndex
    // //find min
    // while(s + 1 < e){
    //     mid = Math.floor((s+e)/2)
    //     //unknow-sorted
    //     if(nums[mid] < nums[e]){
    //         e = mid
    //     }
    //     //sorted-unsorted
    //     else{
    //         s = mid
    //     }
    // }
    // if(nums[s] < nums[e]) minIndex =  s
    // else minIndex = e
    
    // if(minIndex !== 0){
    //     s = 0
    //     e = minIndex
    //     while( s + 1 < e){
    //         mid = Math.floor((s + e)/2)
    //         if(nums[mid] === target) return mid
    //         else if(nums[mid] > target) e = mid - 1
    //         else s = mid + 1
    //     }
    //     if(nums[s] === target) return s
    //     if(nums[e] === target) return e
    // }
    
    // s = minIndex
    // e = nums.length -1
    // while(s + 1 < e){
    //     mid = Math.floor((s + e)/2)
    //     if(nums[mid] === target) return mid
    //     else if(nums[mid] > target) e = mid - 1
    //     else s = mid + 1
    // }
    // if(nums[s] === target) return s
    // if(nums[e] === target) return e
    // return -1
    
    var s = 0
    var e = nums.length - 1
    if(e===-1)return -1
    
    var mid
    while(s + 1 < e){
        mid = Math.floor((s + e)/2)
        if(nums[mid] === target) return mid
        //unknow-sorted
        else if(nums[mid] < nums[e]){
            if(target > nums[mid] && target <= nums[e]) s = mid
            else e = mid
        }
        //sorted-unsorted
        else{
           if(target >= nums[s] && target < nums[mid]) e = mid
           else s = mid
        }
    }
    if(target === nums[e]) return e
    if(target === nums[s]) return s
    return -1
};