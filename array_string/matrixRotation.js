function rotate(matrix){
  var n = matrix[0].length
  var layers = Math.floor((n+1) / 2)
  for(var curLayer= 0; curLayer< layers; curLayer++){//layers
   //console.log(layers)
   var begin = curLayer;
   var end = n - 1 - curLayer;
   //console.log(begin, end)
   for(var j = begin; j < end; j++){
    // var temp = top
    var temp = matrix[curLayer][j]
    //console.log(temp)
    // top = left
    matrix[curLayer][j] = matrix[end-j][curLayer]
    //console.log(matrix[curLayer][j])
    // left = bottom
    matrix[end-j][curLayer]= matrix[end][n-1-j]
    //console.log(n-1-j)
    // bottom = right
    matrix[end][n-1-j] = matrix[j][end]
    //console.log(matrix[j][end])
    // right = temp 
    matrix[j][end] = temp
   }
   //console.log('-')
  }
  console.log(matrix)
}

//this is much simplier to understand!!!!!!! :)
function rotate1(matrix){
  var n = matrix[0].length
  //console.log(n)
  for(var i = 0; i < Math.floor((n + 1) / 2); i++){//layer by layer
    //console.log('hello?')
    //console.log(i, n - 1 * 2)
    for(var j = 0; j < n - 1 - i * 2; j++){//element by element
      //console.log(j)
      var temp = matrix[i][i+j]
      //console.log(matrix[i][i+j])
      matrix[i][i+j] = matrix[n-1-i-j][i]      
      matrix[n-1-i-j][i] = matrix[n-1-i][n-1-i-j]
      matrix[n-1-i][n-1-i-j] = matrix[i+j][n-1-i]
      matrix[i+j][n-1-i] = temp
    }
    //console.log('-')
  }
  console.log(matrix)
}

var test3 = [
 [ 1, 2, 3, 1, 6, 5],
 [ 8, 9, 4, 11, 8, 2],
 [ 7, 6, 5 ,12, 5, 6],
 [ 17, 0, 4 ,2, 3, 34],
 [ 11, 1, 5 ,7, 2, 8],
 [ 1, 98, 14, 1, 10, 3]
]
rotate1(test3)
console.log('-------')

var test2 = [
 [ 1, 2, 3, 1, 6],
 [ 8, 9, 4, 11, 8],
 [ 7, 6, 5 ,12, 5],
 [ 17, 0, 4 ,2, 3],
 [ 11, 1, 5 ,7, 2]
]
//2, 7 51
//240
rotate1(test2)
console.log('-----')

var test1 = [
 [ 1, 2, 3, 1],
 [ 8, 9, 4, 11],
 [ 7, 6, 5 ,12],
 [ 17, 0, 4 ,2]
]
//console.log((test1[1])[2])
//0, 3
//1, 2
//
//17, 7, 8
//6
//2, 4, 0
//5
var test = [
 [ 1, 2, 3 ],
 [ 8, 9, 4 ],
 [ 7, 6, 5 ]
]
//0, 2
//1, 1
//
//7,8
//9
//5,6
rotate1(test1)
console.log('-------')
rotate1(test)