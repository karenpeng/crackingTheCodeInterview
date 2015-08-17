//code below is not right!!!
var isPalindrome = function(x) {
    if(x < 0) return false
    if(x === 0) return true
    
    var layer = 0
    var copy = x
    while(copy >= 10){
        copy = Math.floor(copy/10)
        layer ++
    }
    
    var more = 10
    layer = Math.pow(10, layer)
    while(more <= layer){
        console.log(more, layer)
        var a = x % more
        var b = x  layer
        //console.log(a, b)
        if(a !== b) return false
        more *= 10
        layer /= 10
    }
    return true
};

isPalindrome(10)