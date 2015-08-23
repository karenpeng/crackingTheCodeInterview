/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    nums.sort(function(a, b){
        return a - b > 0
    })
    var list = []
    var result = []
    var visited = []
    nums.forEach(function(e, index){
        visited[index] = false
    })
    helper(result, list, nums, visited)
    return result
};

function helper(result, list, nums, visited){
    if(list.length === nums.length){
        result.push(deepCopy(list))
        return
    }
 
    for(var i = 0; i < nums.length; i++){
        if(visited[i]) continue
        visited[i] = true
        list.push(nums[i])
        helper(result, list, nums, visited)
        list.pop()
        visited[i] = false
        while(i<nums.length-1 && nums[i]===nums[i+1])i++
    }
}

function deepCopy(arr){
    var _arr = []
    arr.forEach(function(el){
        _arr.push(el)
    })
    return _arr
}