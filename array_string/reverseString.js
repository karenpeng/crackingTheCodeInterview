function reverse(str){
  var result = []
  for(var i = 0, j = str.length - 1; i < j; i ++, j-- ){
    // var temp = str[i]
    // console.log('before')
    // console.log(temp, str[i], str[j])
    // str[i] = str[j]
    // console.log(str[i], str[j])
    // str[j] = temp  
    // console.log('after')
    // console.log(temp, str[i], str[j])
    result[i] = str[j]
    result[j] = str[i]
  }
  result = result.map(function(item){
    return item + ''
  }).reduce(function(a, b){
    return a.concat(b)
  })
  return result
}

var test = "Creative Technologist"
console.log(reverse(test))