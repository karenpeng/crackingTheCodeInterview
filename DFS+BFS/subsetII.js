/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    if(nums.length < 1) return[]
    var list = []
    var result = []
    var begin = 0
    nums.sort(function(a, b){
        return a - b
    })
    helper(nums, list, result, begin)
    return result
};

function helper(nums, list, result, begin){
    result.push(deepCopy(list))
    for(var i = begin; i < nums.length; i++){
        list.push(nums[i])
        begin++
        helper(nums, list, result, begin)
        list.pop()
        //@important!!!
        //去重别忘了也要给begin++
        while(i < nums.length - 1 && nums[i] === nums[i+1]) {
            i++
            begin ++
        }
    }
}

function deepCopy(list){
    var arr = []
    list.forEach(function(e){
        arr.push(e)
    })
    return arr
}