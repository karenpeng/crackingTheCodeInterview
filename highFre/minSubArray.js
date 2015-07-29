/**
 * @param {number[]} nums
 * @return {number}
 */
var minSubArray = function(nums) {
    if(nums.length < 1) return 0
    var arr = []
    nums.forEach(function(x){
        arr.push(-x)
    })
    console.dir(arr)
    var sum = 0
    var minSum = 0
    var max = -Infinity
    for(var i = 0; i < arr.length; i++){
        sum += arr[i]
        max = Math.max(max, sum - minSum)
        minSum = Math.min(sum, minSum)
    }
    return -max
};

console.log(minSubArray([1,-1,-2,1]))