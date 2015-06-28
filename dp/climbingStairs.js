/**
 * @param {number} n
 * @return {number}
 */
// var climbStairs = function(n) {
//     var hash = {}
//     return helper(n, hash)
// };

// function helper(n, hash){
//     if(n === 1 || n === 2) return 1
//     if(hash[n] !== undefined) return hash[n]
//     hash[n] = climbStairs(n - 1, hash) + climbStairs(n - 2, hash) 
//     return hash[n]
// }

var climbStairs = function(n){
    f = []
    f[0] = 1
    f[1] = 2
    
    for(var i = 2; i < n; i++){
        f[i] = f[i-1] + f[i-2]
    }
    console.log(f)
    return f[n-1]
}

console.log(climbStairs(3))