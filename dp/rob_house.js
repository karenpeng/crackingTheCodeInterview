/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    //state: f[n]: how much max $ i could rob from the first n houses 
    //func:  f[i] = Max(f[i-1], f[i-2] + nums[i]) ???
    //init:  f[0] = nums[0]
    //return: f[nums.length-1]
    
    if(nums.length < 1) return 0
    var f = []
    f[0] = nums[0]
    f[1] = Math.max(nums[0], nums[1])
    
    for(var i = 2; i < nums.length; i++){
        f[i] = Math.max(f[i-1], f[i-2] + nums[i])
    }
    
    return f[nums.length-1]
};