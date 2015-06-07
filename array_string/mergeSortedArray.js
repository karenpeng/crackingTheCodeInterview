function merge(arrA, m, arrB, n){
  var i = m - 1
  var j = n - 1

  while( i >= 0 && j >= 0){
    if(arrA[i] > arrB[j]){
      arrA[i + j + 1] = arrA[i]
      i --
    }else{
      arrA[i + j + 1] = arrB[j]
      j --
    }
  }

  console.log(i, j)

  if(j >= 0){

    for(; j >= 0; j--){
      arrA[j] = arrB[j]
    }

  }

  console.log(arrA)
}

// merge([1,3,5], 3, [2, 4, 6], 3)

// merge([0], 0, [1], 1)

merge([4,5,6,0,0,0], 3, [1,2,3], 3)