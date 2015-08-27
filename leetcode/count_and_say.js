/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    n = n - 1
    var s = '1'
    for(var j = 0; j < n; j++){
        var haha = ''
       for(var i = 0; i < s.length; i++){
           var count = 1
           while(i < s.length - 1 && s[i] == s[i+1]){
               count ++
               i++
           }
           haha += (count + '' + s[i])
       }
        s = haha
    }
    return s
};