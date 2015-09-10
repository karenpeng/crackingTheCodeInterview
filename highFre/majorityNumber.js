/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
   var count = 0
   var candidate = -1
   for(var i = 0; i < nums.length; i++){
       if(count === 0){
           candidate = nums[i]
           count = 1
       }else if(candidate === nums[i]){
           //console.log(candidate)
           count++
       }else{
           count--
       }
   }
   count = 0
   nums.forEach(function(e){
       if(e === candidate) count++
   })
   if( count > nums.length /2) return candidate
   return null
};

//majorityElement([2,3,5,1,24,5,2,3,4,5,1,4,4,4,4,4,4,4,1,2,3])

console.log(majorityElement([1, 0, 2]))


