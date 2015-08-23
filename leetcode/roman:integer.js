/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var dic = {'I': 1 , 'V': 5, 'X': 10, 'L': 50, 'C' : 100, 'D' : 500, 'M' : 1000}
    var result = 0
    for(var i = 0; i < s.length; i++){
        if(i < s.length-1 && dic[s[i]] < dic[s[i+1]]){
            result += ( dic[s[i+1]] - dic[s[i]])
            i++
        }else{
            result += dic[s[i]]
        }
    }
    return result
};


/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    var result = ''
    var i = 0
    while(num !== 0){
        var r = num % 10
        num = Math.floor( num / 10 )
        i++
        result = helper(r, i) + result
    }
    return result
};

function helper(num, index){
    switch(index){
        case 1:
           return helper2('I', 'V', 'X', num)
           break
        case 2:
           return helper2('X', 'L', 'C', num)
           break
        case 3:
           return helper2('C', 'D', 'M', num)
           break
        case 4:
           return helper2('M', '?', '?', num)
           break
    }
}

function helper2(one, five, ten, num){
    if(num === 0){
        return ''
    }
    if(num === 4){
        return one + five
    }
    if(num === 5){
        return five  
    }
    if(num === 9){
        return one + ten
    }
    var sth = ''
    if(num < 4){
        var sth = ''
        for(var i = 0; i < num; i++){
            sth += one
        }
        return sth
    }
    for(var i = 0; i < num - 5; i++){
        sth += one
    }
    return five + sth 
}