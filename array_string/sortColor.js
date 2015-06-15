/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    
    var zero = 0
    var runner = 0
    var two = nums.length -1
    
    while(runner <= two){
        if(nums[runner] === 2){
            //swap it with two
            var temp = nums[runner]
            nums[runner] = nums[two]
            nums[two] = temp
            two --
        }
        
        else if(nums[runner] === 0){
            //swap it with zero
            var temp = nums[runner]
            nums[runner] = nums[zero]
            nums[zero] = temp
            zero ++ 
            runner ++
        }
        else{
            runner ++
        }
    }
    
};
//notes:
//每次swap完 那个被swap的的index就要变更，在这里是two跟zero