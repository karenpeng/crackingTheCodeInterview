/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    var result = []
    var list = []
    helper(result, list, nums)
};

function helper(result, list, nums){
    if(list.length === nums.length) {
        result.push(deepCopy(list))
        return
    }
    
    for(var i = 0; i < nums.length; i++){
        if(contain(list, i[num])) continue
        list.push(nums[i])
        helper(result, list, nums)
        list.pop()
    }
}

function contain(arr, el){
    return arr.some(function(e){
        return e === el
    })
}

function deepCopy(arr){
    var newArr = []
    arr.forEach(function(el){
        newArr.push(el)
    })
    return newArr
}
