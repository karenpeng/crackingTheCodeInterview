/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    if( n < 1 ) return []
    var list = []
    var result = []
    permutation(n, k, list, result, 0)
    return result
};

function permutation(num, k, list, result, begin){
    if(k === list.length){
        result.push(deepCopy(list))
        return
    }
    for(var i = begin; i < num; i++){
        if(contain(list, i+1)) continue
        list.push(i+1)
        permutation(num, k, list, result, i+1)
        list.pop()
    }
}

function contain(list, target){
    return list.some(function(e){
        return e === target
    })
}

function deepCopy(list){
    var arr = []
    list.forEach(function(e){
        arr.push(e)
    })
    return arr
}

console.log(combine(10, 7))