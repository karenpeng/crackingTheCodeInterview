/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    if(s.length < 1) return[]
    var list = []
    var result = []
    var begin = 0
    subset(s, list, result, begin)
    return result
};

function subset(s, list, result, begin){
    if(begin === s.length){
        result.push(deepCopy(list))
        return
    }
    for(var i = begin + 1; i < s.length + 1; i++){
        console.log(begin, i)
        var prefix = s.substring(begin, i)
        if(!isPalindrome(prefix)) continue
        list.push(prefix)
        subset(s, list, result, i)
        list.pop()
    }
}

function isPalindrome(str){
    var i = 0
    var j = str.length - 1
    while(i < j){
        if(str[i] !== str[j]) return false
        i++
        j--
    }
    return true
}

function deepCopy(list){
    var arr = []
    list.forEach(function(e){
        arr.push(e)
    })
    return arr
}

console.log(partition('aab'))