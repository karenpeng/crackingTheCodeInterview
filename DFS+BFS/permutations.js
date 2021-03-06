/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    var result = []
    var list = []
    var visited = []
    nums.forEach(function(n, index){
        visited[index] = false
    })
    helper(result, list, nums, visited)
    return result
}

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
    }
}

function deepCopy(arr){
    var _arr = []
    arr.forEach(function(el){
        _arr.push(el)
    })
    return _arr
}