/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  var f = []
  
  for(i = 0; i < obstacleGrid.length; i++){
      for(j = 0; j < obstacleGrid[0].length; j++){
          if(obstacleGrid[i][j] === 1) {
              if(f[i] === undefined) f[i] = []
              f[i][j] = 0
          }
      }
  }
  
  if(f[0] === undefined) {
    f[0] = []
    f[0][0] = 1
  }
  
   for(var j = 1; j < obstacleGrid[0].length; j++){    
       if(f[0][j-1] === 0) f[0][j] = 0
       else if(f[0][j]===undefined) f[0][j] = 1
   }
  
   for(var i = 1; i < obstacleGrid.length; i++){
      if(f[i] === undefined) f[i] = []
      if(f[i-1][0] === 0) f[i][0] = 0
      else if(f[i][0]===undefined) f[i][0] = 1
  }

  for(i = 1; i < obstacleGrid.length; i++){
      for(j = 1; j < obstacleGrid[0].length; j++){
          if(f[i][j] === undefined){
            f[i][j] = f[i-1][j] + f[i][j-1]
          }
      }
  }
  
  return f[obstacleGrid.length-1][obstacleGrid[0].length-1]
  
};

console.log(uniquePathsWithObstacles([[0, 1]]))