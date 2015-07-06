/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    
    var i = 0
    var j = 0
    
    //装满不是所给值的元素就行了， 不用管后面:)
    while(j<nums.length){
      
      if(nums[j]!==val){
          //assign
          console.log('swapppp!')
          nums[i] = nums[j]
          i++
      }  
    j++
        
    }
    return i
};

//well i know, this is crazy isn't it
removeElement([1,1,1,1,1,1,1,1,1],2)