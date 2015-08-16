/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    if(matrix.length < 1) return 0
    
     var f = []
     var max = 0
        
        for(var i = 0; i < matrix.length; i++){
            f[i] = []
            f[i][0] = matrix[i][0]
        }
        
        for(var j = 1; j < matrix[0].length; j++){
            f[0][j] = matrix[0][j]
        }
        
        for(var i = 1; i < matrix.length; i++){
            for(var j = 1; j < matrix[0].length; j++){
                if(matrix[i][j] !== '0') 
                    f[i][j] = Math.min(f[i-1][j], f[i][j-1], f[i-1][j-1]) + 1
                else f[i][j] = 0
            }
        }
        
        f.forEach(function(l){
            l.forEach(function(n){
                max = Math.max(max, n)
            })
        })
        
        return Math.pow(max, 2);
};