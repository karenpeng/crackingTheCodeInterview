/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    var f = []
    f[0]=[]
    f[0][0] = grid[0][0]
    
    for(var i = 1; i < grid[0].length; i++)
    f[0][i] = f[0][i-1] + grid[0][i]

    
    for(i = 1; i<grid.length; i++){
        if(f[i]===undefined) f[i] = []
        f[i][0] = f[i-1][0] + grid[i][0]
    }
    
    for(i = 1; i < grid.length; i++){
        for(var j = 1; j < grid[0].length; j++){
          if(f[i]===undefined) f[i] = []
          f[i][j] = Math.min(f[i-1][j], f[i][j-1]) + grid[i][j]
        }
    }
    
    return f[grid.length-1][grid[0].length-1]
};

console.log(minPathSum([[1,3,1],[1,5,1],[4,2,1]]))