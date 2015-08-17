/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  if(grid.length < 1 || grid[0].length < 1) return 0
  
  var result = 0
  for(var i = 0; i < grid.length; i++){
      for(var j = 0; j < grid[0].length; j++){
          if(grid[i][j] !== '1') continue
          result++
          helper(grid, i, j)
      }
  }
  return result
};

function helper(grid, i, j){
    if(i<0 || i >= grid.length || j < 0 || j >= grid[0].length) return
    if(grid[i][j] === '1'){
        grid[i][j] = '2'
        helper(grid, i-1, j)
        helper(grid, i+1, j)
        helper(grid, i, j-1)
        helper(grid, i, j+1)
    }
}