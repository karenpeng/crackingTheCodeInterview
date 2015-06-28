/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
 
var uniquePaths = function(m, n) {
var f = []
f[0] = []
for(var i = 0; i < n; i++) f[0][i] = 1
for(var j = 0; j < m; j++){
    if(j > 0) f[j] = []
    f[j][0] = 1
}

//这里m和n的位置跟前面不一样，注意！！！
for(i = 1; i < m; i++){
    for(j = 1; j < n; j++){
        f[i][j] = f[i-1][j] + f[i][j - 1]
    }
}

return f[m-1][n-1]

};
//一定要主要m和n的位置