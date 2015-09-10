//http://bangbingsyb.blogspot.com/2014/11/leetcode-unique-binary-search-trees-i-ii.html
//总结规律：
//f(0) = 1
//f(n) = f(0)*f(n-1) + f(1)*f(n-2) + ... + f(n-2)*f(1) + f(n-1)*f(0)


/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    var dp = []
    dp[0] = 1
    
    for(var i = 1; i <=n; i++){
      //只能往前面推 从已有的那里取结果
        for(var j = 0; j < i; j++){
            if(dp[i] === undefined) dp[i] = 0
            dp[i] += (dp[j] * dp[i-1-j])
        }
    }
    return dp[n]
};