/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
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
    }
    
    if(target < 0) return
    
    var pre = -1
    for(var i = begin; i < nums.length; i++){
        //因为sort过 所以可以这样在外层去重
        //好巧妙啊好巧妙~~
        if(nums[i] === pre) continue
        list.push(nums[i])
        subset(nums, list, result, i+1, target - nums[i])
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

console.log(combinationSum2([10,1,2,7,6,1,5], 8))