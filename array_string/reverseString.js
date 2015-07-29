/**
 * @param {string} str
 * @returns {string}
 */
var reverseWords = function(str) {
    if(str.length < 0 || str === ' ') return ''
   var str1 = reverse(str)
   var words = str1.split(/\s+/)
   var result = []
   words.forEach(function(word){
       if(word !== '') result.push(reverse(word))
   })
   return result.join(' ')
};

function reverse(str){
    return str.split('').reverse().join('')
}