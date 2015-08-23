/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    if(matrix.length === 0 || matrix[0].length === 0) return []
    var m = matrix.length
    var n = matrix[0].length
    
    var r = 0, l = m-1, f = 0, b = n-1
    var dir = 0
    var result = []
    
    while(r <= l && f <= b){
        switch(dir){
            case 0:
                for(var i = f; i <= b; i++){
                    result.push(matrix[r][i])
                }
                r++
                dir = 1
                break;
            case 1:
                for(i = r; i <= l; i++){
                    result.push(matrix[i][b])
                }
                b--
                dir = 2
                break;
            case 2:
                for(i = b; i >= f; i--){
                    result.push(matrix[l][i])
                }
                l--
                dir = 3
                break;
            case 3:
                for(i = l; i >= r; i--){
                    result.push(matrix[i][f])
                }
                f++
                dir = 0
                break;
        }
    }
    return result
};