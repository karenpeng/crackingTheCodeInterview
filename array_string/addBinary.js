/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    var i = a.length-1
    var j = b.length-1
    var carry = 0
    var result = ''
    while(i >= 0 && j >=0){
        var sum = parseInt(a[i]) + parseInt(b[j]) + carry
        result += sum % 2
        carry = Math.floor(sum/2)
        j--
        i--
    }
    while( i >= 0){
        var sum = parseInt(a[i]) + carry
         result += sum % 2
         carry = Math.floor(sum/2)
        i--
    }
    while( j >= 0){
        var sum = parseInt(b[j]) + carry
         result += sum % 2
        carry = Math.floor(sum/2)
        j--
    }
    while(carry > 0){
        result += carry % 2
        carry = Math.floor(carry/2)
    }
    return reverse(result)
};

//@IMPORTANT!!! 
//this won't work!!!!!!!!
function reverse(arr){
    var i = 0
    var j = arr.length -1
    while(i < j){
        var tem = arr[i]
        arr[i] = arr[j]
        arr[j] = tem
        i++
        j--
    }
    return arr
}

// var a = 'dfgh'
// a[1] = 'a'
// console.log(a)
// "dfgh"

function reverse(arr){
    return arr.split('').reverse().join('')
}