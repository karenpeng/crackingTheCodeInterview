/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if(haystack.length < needle.length) return -1
  if(needle.length === 0) return 0
  
  var i = 0
  var j = 0
  
  while(i<=haystack.length){
    if(haystack[i]===needle[j]){
      console.log(haystack[i], needle[j])
      if(j === needle.length - 1) return i-j
      j++
    }else if(j > 0){
      j = 0
    }
    i++
  }
  return -1
};

strStr("mississippi", "issip")