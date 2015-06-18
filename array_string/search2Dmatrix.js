/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    var m = matrix.length
    var n = matrix[0].length
    
    if(m===0 || n ===0) return false
    if(target < matrix[0][0]) return false
    
    var start = 0
    var end = m-1
    var guess
    
    while(start <= end){
        guess = Math.floor((start + end) / 2)
        if(matrix[guess][0] === target) return true
        else if(matrix[guess][0] < target) start = guess+1
        else end = guess-1
    }
    
    ////it must be end, not start, why???？
    var row = end
    ////
    start = 0
    end = n-1
    console.log(row, matrix[row])
    
    while(start <= end){
        guess = Math.floor((start + end) / 2)
        if(matrix[row][guess]===target) return true
        else if(matrix[row][guess]<target) start = guess+1
        else end = guess-1
    }
    
    return false
    
};

console.log(searchMatrix([[1]],2))