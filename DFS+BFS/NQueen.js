/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    if(n === 0) return []
    var list = []
    var result = []
    permutation(n, list, result)
    return result
};

function draw(list){
    console.log(list)
    var board = []
    list.forEach(function(num){
        var level = ''
        for(var i = 0; i < list.length; i ++){
            if( i === num ) level += 'Q'
            else level += '.'
        }
        board.push(level)
    })
    return board
}

function permutation(n, list, result){
    if(list.length === n){
        result.push(draw(list))
        return
    }
    for(var i = 0; i < n; i++){
        if(!isValid(list, i)) continue
        list.push(i)
        permutation(n, list, result)
        list.pop()
    }
}

//@IMPORTANT!!!!! this is fucking important
function isValid(list, i){
    var row = list.length
    for(var j = 0; j < row; j++){
        //去重
        if(list[j] === i) return false
        //每当想放进去一个i,就check一下这个i会不会跟已有的数据（遍历一遍）成斜线
        if(j - list[j] === row - i) return false
        if(j + list[j] === row + i) return false
    }
    return true
}