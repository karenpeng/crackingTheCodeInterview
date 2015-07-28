/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    if(candidates.length < 1) return []
    candidates.sort(function(a, b){
        return a - b
    })
    var list = []
    var result = []
    subset(candidates, list, result, 0, target)
    return result
};

function subset(nums, list, result, begin, target){
    if(target === 0){
        result.push(deepCopy(list))
        return
    }
    
    if(target < 0) return
    
    var pre = -1
    for(var i = begin; i < nums.length; i++){
        if(nums[i] === pre) continue
        list.push(nums[i])
        subset(nums, list, result, i, target - nums[i])
        pre = nums[i]
        list.pop()
    }
}

function deepCopy(list){
    var arr = []
    list.forEach(function(e){
        arr.push(e)
    })
    return arr
}