/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if(digits === undefined || digits.length === 0) return []
    var dic = [
        ' ',
        //keep a space for 1 because it's a placeholder, otherwise the length of your output will be less when you have 1
        ' ',
        'abc',
        'def',
        'ghi',
        'jkl',
        'mno',
        'pqrs',
        'tuv',
        'wxyz'
        ]
    var arr = []
    for(var i = 0; i < digits.length; i++){
        arr.push(dic[digits[i]])
    }
    return helper(arr, digits.length)
};

function helper(arr, len){
    var result = []
    var list = []
    order(result, list, arr, len, 0)
    return result
}

function order(result, list, s, len, ii){
    if(list.length === len){
        result.push(makeString(list))
        return
    }
    
    for(var i = ii; i < s.length; i++){
        for(var j = 0; j < s[i].length; j++){
            list.push(s[i][j])
            order(result, list, s, len, i+1)
            list.pop()
        }
    }
}

function makeString(arr){
    var s = ''
    arr.forEach(function(el){
        s+=(el)
    })
    return s
}

console.log(letterCombinations('23'))
console.log('~~~~~')
console.log(letterCombinations('19'))