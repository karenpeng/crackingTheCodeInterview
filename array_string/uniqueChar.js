function uniqueChar(str){
  var map = {}
  for(var i = 0; i < str.length; i++){
    if(map[str[i]]){
      return false;
    }
    map[str[i]] = true;
  }
  return true;
}

var test1 = 'sdghbjiowen'
var test2 = '94tjgwskss'

console.log(uniqueChar(test1))
console.log(uniqueChar(test2))

