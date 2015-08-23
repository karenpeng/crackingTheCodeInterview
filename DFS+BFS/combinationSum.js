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
    
 
    for(var i = begin; i < nums.length; i++){
        list.push(nums[i])
        subset(nums, list, result, i, target - nums[i])
        list.pop()
        while(i<nums.length-1 && nums[i] === nums[i+1]) i++
    }
}

function deepCopy(list){
    var arr = []
    list.forEach(function(e){
        arr.push(e)
    })
    return arr
}