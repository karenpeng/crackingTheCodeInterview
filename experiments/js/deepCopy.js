function deepCopy(obj, _obj){
  for(var key in obj){

    if(typeof obj[key] === "object") {
      _obj[key] = {}
      deepCopy(obj[key], _obj[key])
    }

    // Object.defineProperty(_obj, key, {value: obj[key]})
    _obj[key] = obj[key]
  }
}

var a = { 1: 'a', 2 : { 3: {4: 5} }}
var b = {}
deepCopy(a, b)
console.log(b)
a['2'] = 0
console.log(b)

function flattenObj(obj){

  var result = {}

  for(var key in obj){

    if(typeof obj[key] === 'object'){

      var flatObj = flattenObj(obj[key])

      for(var _key in flatObj){

        result[key+'_'+_key] = flatObj[_key]

      }

    }else{
      result[key] = obj[key]
    }

  }

  return result
}

console.log(flattenObj(b))

