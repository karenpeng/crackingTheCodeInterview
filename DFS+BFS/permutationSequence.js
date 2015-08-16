/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
    
    var total = factorial(n)
    if(k > total) k = k % total
    if(k === 0) k = total

    console.log(k)
    
    var result = []
    var list = []
    helper(result, list, n, k)
    console.log(result)
    return concat(result[k-1])
};

function helper(result, list, n, k){
    if(result.length === k) return
    
    if(list.length === n){
        result.push(deepCopy(list))
        return
    }
    
    for(var i = 1; i <= n; i++){
        if(contain(list, i))continue
        list.push(i)
        helper(result, list, n, k)
        list.pop()
    }
}

function deepCopy(arr){
    var newArr = []
    arr.forEach(function(el){
        newArr.push(el)
    })
    return newArr
}

function contain(list, el){
    return list.some(function(ee){
        return ee === el
    })
}

function concat(list){
    var output = ''
    list.forEach(function(e){
        output += e
    })
    return output
}

function factorial(n){
  if(n===0 || n===1) return n
  var pre = 1
  for(var i = 2; i <= n; i++){
    var cur = i * pre
    pre = cur
  }
  return cur
}

console.log(getPermutation(8, 15485))