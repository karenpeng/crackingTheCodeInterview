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

// var wordBreak = function(s, wordDict) {
//  var f = []
//  f[-1] = true
//  for(var i = 0; i < s.length; i++){
//      f[i] = false
//      for(var j = -1; j < i; j ++){
//       //console.log(s.substring(j+1, i))
//          if(f[j] && wordDict.has(s.substring(j+1, i+1))) {
//              f[i] = true
//              break
//          }
//      }
//  }
 
//  return f[s.length - 1]
// }
/**
 * @param {string} s
 * @param {set<string>} wordDict
 * @return {boolean}
 */
// state: f[i]表示前i个字符能否被完美切分
// function: f[i] = OR{f[j]}, j < i, j+1 ~ i是一个词
// 典中的单词
// intialize: f[0] = true
// answer: f[s.length()]
// 注意：切分位置的枚举->单词长度枚举
// O(NL), N: 字符串长度, L: 最长的单词的长度
var wordBreak = function(s, wordDict) {
 var f = []
 f[0] = true
 var max = 0
 
 wordDict.forEach(function(w){
     max = Math.max(max, w.length)
 })
 
 for(var i = 1; i <= s.length; i++){
     f[i] = false
     for(var j = i; j >= i - max; j--){
         if(f[j] && wordDict.has(s.substring(j, i))){
             f[i] = true
             break
         }
     }
 }
 return f[s.length]
}

console.log(wordBreak('abcdefg', new Set(['a', 'b', 'c', 'd', 'e', 'f', 'g'])))
//console.log(wordBreak('ab', new Set(['a', 'b'])))
//console.log(wordBreak('a', new Set([])))

//注意substring的使用方法：
//a = 'adggdfg'
//a.substring(0,0)
//""
//a.substring(0,1)
//"a"
//后面一定要加多一位！！！