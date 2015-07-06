function flattenObj(obj){

  var result = {}

  for(var key in obj){

    if(typeof obj[key] === 'object'){

      //flattenObj(obj[key]);
      
      var flatObj = flattenObj(obj[key])

      //console.log(flatObj)

      for(var key2 in flatObj){

        result[key+'_'+key2] = flatObj[key2]

      }

    }else{

      result[key] = obj[key]
      //return;
    }

  }
  return result;
}

console.log(flattenObj({key1: {key2: 2}}))