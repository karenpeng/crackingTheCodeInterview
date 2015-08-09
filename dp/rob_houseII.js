/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    //f[n] max $ for n house
    //f[n] = Math.max(f[n-1], f[n-2]+nums[n))
    //f[0] = nums[0]
    //f[1] = Math.max(nums[0], nums[1])
    // return f[nums.length-1]
    if(nums.length < 1) return 0

    //@important!!!!  
    //一定要讨论只有一个的时候 因为只有一个的时候第二种情况就不对了
    if(nums.length === 1) return nums[0]
    var f = []
    //1. f[0] = 0
    f[0] = 0
    f[1] = nums[1]
    for(var i = 2; i < nums.length; i++){
        f[i] = Math.max(f[i-1], f[i-2]+nums[i])
    }
    var sum1 = f[nums.length-1]
    
    //2.f[0] = nums[0]
    f[0] = nums[0]
    f[1] = Math.max(nums[0], nums[1])
    for(var i = 2; i < nums.length-1; i++){
        f[i] = Math.max(f[i-1], f[i-2]+nums[i])
    }
    var sum2 = f[nums.length-2]
    
    return Math.max(sum1, sum2)
};