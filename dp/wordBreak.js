// /**
//  * @param {string} s
//  * @param {set<string>} wordDict
//  * @return {boolean}
//  */
// var wordBreak = function(s, wordDic){

//   if(s === null || s.length === 0) return true

//   var f = []
//   f[0] = true

//   for(var i = 1; i <= s.length; i++){
//     f[i] = false
//     for(var gap = 1; gap <= i; i ++){
//       if(!f[i - gap]) continue
//       var w = s.substring(i - gap, i)
//       if( wordDic.has(w)) {
//         f[i] = true
//         break
//       }
//     }
//   }
//   return f[s.length]
// }

// /**
//  * @param {string} s
//  * @param {set<string>} wordDict
//  * @return {boolean}
//  */
// var wordBreak = function(s, wordDict) {
//  var f = []
//  f[-1] = true
//  for(var i = 0; i < s.length; i++){
//      f[i] = false
//      for(var j = 0; j < i; j ++){
//        if(f[j] && wordDict.has(s.substring(j, i))){
//         f[i] = true
//        break
//        }
//      }
//  }
 
//  return f[s.length - 1]
// };

// // console.log(wordBreak('a', new Set(['a'])))
// console.log(wordBreak('ab', new Set(['a', 'b'])))

var wordBreak = function(s, wordDict) {
 var f = []
 f[-1] = true
 for(var i = 0; i < s.length; i++){
     f[i] = false
     for(var j = -1; j < i; j ++){
      //console.log(s.substring(j+1, i))
         if(f[j] && wordDict.has(s.substring(j+1, i+1))) {
             f[i] = true
             break
         }
     }
 }
 
 return f[s.length - 1]
}

console.log(wordBreak('ab', new Set(['a', 'b'])))

//注意substring的使用方法：
//a.substring(0,0)
//""
//a.substring(0,1)
//"a"
//后面一定要加多一位！！！