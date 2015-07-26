/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    if(nums.length === 0) return[]
    var list = []
    var result = []
    var begin = 0
    nums.sort(function(a,b){
        return a - b
    })
    helper(nums, list, result, begin)
    return result
}

function helper(nums, list, result, begin){
    result.push(deepCopy(list))
    
    for(var i = begin; i < nums.length; i++){
        list.push(nums[i])
        begin ++
        helper(nums, list, result, begin)
        list.pop()
    }
}

function deepCopy(arr){
    var _arr = []
    arr.forEach(function(el){
        _arr.push(el)
    })
    return _arr
}