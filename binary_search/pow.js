/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
  if(x===0)return 0
  if(n===0)return 1
  
  if(n < 0){
    n = -n
    x = 1/x
  }
  
  //用递归
  //这题这么巧妙，肯定记不住。。。。T_T
  var v = myPow(x, Math.floor(n/2))
  if(n%2 === 0) return v*v
  else return v*v*x
};