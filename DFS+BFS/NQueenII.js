/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
    if(n < 1) return [] 
    var list = []
    var result = []
    result[0] = 0
    permutation(n, list, result)
    return result[0]
};

function permutation(n, list, result){
    if(list.length === n){
        result[0]++
        return
    }
    
    for(var i = 0; i < n; i++){
        if(!isValid(list, i)) continue
        list.push(i)
        permutation(n, list, result)
        list.pop()
    }
}

function isValid(list, i){
    for(var j = 0; j < list.length; j++){
        if(list[j] === i) return false
        if(list[j] - j === i - list.length) return false
        if(list[j] + j === i + list.length) return false
    }
    return true
}