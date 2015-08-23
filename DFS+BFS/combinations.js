/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    var result = []
    var list = []
    subset(n, k, result, list, 0)
    return result
}

function subset(n,k,result, list, begin){
    if(list.length === k){
        result.push(deepCopy(list))
        return
    }
    for(var i = begin; i < n; i++){
        list.push(i+1)
        subset(n, k, result, list, i+1)
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