/**
 * @param {string} s
 * @return {number}
 */
var minCut = function(s) {
    if (s === null || s.length === 0) {
        return 0;
    }
     var getP = []
     getP = getPalindrome(s, getP)
     console.log(getP)
     var f = []
     f[0] = -1
     for(var i = 1; i < s.length; i++){
        f[i] = i-1
     }
     
     for(var i = 0; i < s.length + 1; i++){
         for(j = 0; j < i; j++){
             //not zero index!!!!!
            if(getP[j][i-1]){
                f[i] = Math.min(f[i], f[j]+1)
            }
         }
     }
     
     return f[s.length]
        
};

function getPalindrome(string, getP){
   
    for(var i = 0; i < string.length; i++){
        getP[i]=[]
        getP[i][i] = true
    }
    for(var i = 0; i < string.length-1; i++){
        getP[i][i+1] = string[i] === string[i+1]
    }
    for(var length = 2; length < string.length; length++){
        for(var start = 0; start + length < string.length; start++){
            getP[start][start + length] = (getP[start + 1][start + length -1 ] && string[start] === string[start + length])
        }
    }
    return getP
}

console.log(minCut('aab'))
// function isPalindrome(string){
//     var i = 0
//     var j = string.length-1
//     while(i < j){
//         if(string[i]!==string[j]) return false
//         i++
//         j--
//     }
//     return true
// }
