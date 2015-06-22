/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    var m = matrix.length
    var n = matrix[0].length
    
    if(m === 0 || n === 0) return false
    if(target < matrix[0][0]) return false
    if(target > matrix[m-1][n-1]) return false
    
    var s = 0
    var e = m * n - 1
    var mid
    while(s <= e){
        mid = Math.floor((s + e)/2)
        //divide column not row!!!
        var grid = matrix[Math.floor(mid/n)][mid % n]
        if(target === grid) return true
        else if(target > grid) s = mid + 1
        else e = mid - 1
    }
    return false
    
};