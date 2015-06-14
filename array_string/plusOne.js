/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    var carry = 1
    for(var i = digits.length-1; i >= 0; i--){
      //remember to use a to strore the value!!!!
        var a = digits[i]
        digits[i] = (a + carry) % 10
        carry =  Math.floor((a + carry) / 10 )
    }
    if(carry > 0){
        digits.unshift(carry)
    }
    return digits
};