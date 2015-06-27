/**
 * @param {number[][]} triangle
 * @return {number}
 */
// var minimumTotal = function(triangle) {
//     var n = triangle.length -1
//     var sum = Infinity
//     var best = Infinity
//     dfs(0,0,sum,n,best,triangle)
// };

// function dfs(x, y, sum, n, best, triangle){
//     if(sum < best){
//         best = sum
//     }
//     if(x === n){
//       return best
//     }
//     dfs(x+1, y, sum + triangle[x][y], n, best, triangle)
//     dfs(x+1, y+1, sum + triangle[x][y], n, best, triangle)
// }

//memorization :) 
var hash = {}
var minimumTotal = function(triangle){
    var n = triangle.length
    return helper(0, 0, n, triangle)
}

function helper(x, y, n, triangle){
    if(x === n) return 0
    if(hash[x + '|' + y] === undefined) {
        hash[x + '|' + y] = Math.min(helper(x + 1, y, n, triangle), helper(x + 1, y + 1, n, triangle)) + triangle[x][y]
    }
    //console.log(x, y, hash[x+'|'+y])
    return hash[x + '|' + y]
}


//bottom up dynamic programming:)!
var minimumTotal = function(triangle){
    var f = []
    var n = triangle.length
    f[n - 1] = []
    for(var i = 0; i < n; i ++){
        f[n - 1][i] = triangle[n - 1][i]
    }
    for(i = n - 2; i >= 0; i--){
        for(var j = 0; j <= i; j++){
            if(f[i] === undefined) f[i] = []
            f[i][j] = Math.min(f[i+1][j], f[i+1][j+1])+ triangle[i][j]
        }
    }
    return f[0][0]
}


//root down dynamic programming:)
var minimunTotal = function(triangle){
    var n = triangle.length
    var f = []
    f[0] = []
    f[0][0] = triangle[0][0]
    
    for(var i = 0; i < n; i++){
        for(var j = 0; j < i; i++){
            if(f[i]===undefined)f[i] = 0
            if(f[i-1][j]=== undefined) f[i-1][j] = infinity
            if(f[i -1][j -1] === undefined) f[i -1][j -1] = infinity
            f[i][j] = Math.min(f[i-1][j], f[i-1][j-1]) + triangle[i][j]
        }
    }
    var min = Infinity
    for(var i = 0; i < n; i++){
        if (min < f[n-1][i]) min = f[n-1][i]
    }
    return min
}


console.log(minimumTotal([[1],[2,3]]))

