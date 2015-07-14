/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
   var hash = {}
   while(hash[n] === undefined && n !== 1){
        hash[n] = 'haha'
        n = sum(getDigits(n))
   }
   return n === 1
}

function sum(arr){
    var _sum = 0
    arr.forEach(function(n){
        _sum += n * n
    })
    return _sum
}

function getDigits(n){
    var result = []
    while(n >= 1){
        result.push(n % 10)
        n = Math.floor(n/10)
    }
    return result
}


//console.log(isHappy(2))
console.log(isHappy(7))