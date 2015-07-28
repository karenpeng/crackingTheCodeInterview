/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    if(n > 9 * k) return [];
    var list = []
    var result = []
    helper(k, list, result, n, 0)
    return result
};

function helper(k, list, result, n, begin){
    if(n === 0 && list.length === k) {
        result.push(deepCopy(list))
        return
    }
    if(list.length > k || n < 0) return
    
    for(var i = begin; i < 9; i++){
        list.push(i+1)
        helper(k, list, result, n-i-1, i+1)
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


console.log(combinationSum3(3, 7))
console.log(combinationSum3(3, 9))
console.log(combinationSum3(3, 2))