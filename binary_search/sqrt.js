/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if(x===0)return 0
    var min = 0
    var max = x
    var mid
    while(min + 1 < max){
        mid = Math.floor((min + max)/2)
        if(mid * mid === x)return mid
        else if(mid * mid > x){
            max = mid
        }else min = mid
    }
    if(min * min === x) return min
    if(max * max === x) return max
    if(min * min < x) return min
    return max
};