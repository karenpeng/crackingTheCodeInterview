/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    
    var i = 0
    var j = 0
    
    while(j<nums.length){
      
      if(nums[j]!==val){
          //swap
          console.log('swapppp!')
          nums[i] = nums[j]
          i++
      }  
    j++
        
    }
    return i
};

removeElement([1,1,1,1,1,1,1,1,1],2)