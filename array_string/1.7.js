function setZero(matrix){
  var rowNum = matrix.length
  var colNum = matrix[0].length

  var rowZeroHasZero = false;
  var colZeroHasZero = false;

  for(var i = 0; i < colNum; i++){
    if(matrix[0][i] === 0) rowZeroHasZero = true
  }

  for(var j = 0; j < rowNum; j++){
    if(matrix[j][0] === 0) colZeroHasZero = true
  }

  for(var j = 1; j < rowNum; j++){
    for(var i = 1; i < colNum; i++){
      if(matrix[j][i] === 0){
        matrix[0][i] = 0
        matrix[j][0] = 0
      }
    }
  }

  for(var j = 1; j < rowNum; j++){
    if(matrix[j][0]===0) nullifyRow(j)
  }

  for(var i = 1; i < colNum; i++){
    if(matrix[0][i] === 0) nullifyCol(i)
  }

  if(rowZeroHasZero)nullifyRow(0)
  if(colZeroHasZero)nullifyCol(0)

  function nullifyRow(num){
    for(var i = 0; i < colNum; i++){
      matrix[num][i] = 0
    }
  }

  function nullifyCol(num){
    for(var j = 0; j < rowNum; j++){
      matrix[j][num] = 0
    }
  }

  console.log(matrix)

}

setZero([[1]])
