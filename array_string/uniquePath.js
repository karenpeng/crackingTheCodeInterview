/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
 var sum = []
 sum[0] = 1
 for(var i = 0; i < m; i++){
     for(var j = 1; j < n; j ++){
         //if()
         sum[j] = sum[j-1] + sum[j]
         console.log(sum[i])
     }
 }
 return sum[n-1]
};

uniquePaths(1,2)