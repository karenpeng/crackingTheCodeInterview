// Given a column title as appear in an Excel sheet, return its corresponding column number.

// For example:

//     A -> 1
//     B -> 2
//     C -> 3
//     ...
//     Z -> 26
//     AA -> 27
//     AB -> 28 

/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    //65-90 A-Z
    var sum = 0;
    
    for(var i = 0; i < s.length; i++){
        sum += ( Math.pow(26, (s.length - i - 1)) * (s.charCodeAt(i) - 64 ))
    }
    return sum
};

// Given a positive integer, return its corresponding column title as appear in an Excel sheet.

// For example:

//     1 -> A
//     2 -> B
//     3 -> C
//     ...
//     26 -> Z
//     27 -> AA
//     28 -> AB 
/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
    var result = ''
    while(n > 0){
        var num = (n-1) % 26
        n = Math.floor((n-1) / 26)
        result = String.fromCharCode(num + 65) + result
    }
    return result
};

var convertToTitle2 = function(n){
  var result = ''
  while(n > 0){
    var num = n % 26
    n = Math.floor(n / 26)
    if(num === 0){
      //注意处理一下z这个特殊情况
      result = 'Z' + result
      n--
    }else{
      result = String.fromCharCode(num + 64) + result
    }
  }
  return result
}



