/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    var dp = []
    dp[0] = 1
    
    for(var i = 1; i <=n; i++){
        for(var j = 0; j < i; j++){
            if(dp[i] === undefined) dp[i] = 0
            dp[i] += (dp[j] * dp[i-1-j])
        }
    }
    return dp[n]
};