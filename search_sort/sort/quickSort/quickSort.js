function quickSort(arr) {
  _quickSort(arr, 0, arr.length);
}

function _quickSort(arr, first, last) {

  if (first >= last) {

    return;

  } else {
    var pivot = partition(arr, first, last);

    _quickSort(arr, first, pivot - 1);
    _quickSort(arr, pivot, last);
  }
}

function partition(arr, first, last) {
  var pivot = arr[first];

  //console.log('! ' + pivot);

  var lessIndex = first + 1;

  for (var moreIndex = lessIndex; moreIndex < last; moreIndex++) {

    if (arr[moreIndex] <= pivot) {

      swap(arr, moreIndex, lessIndex);
      lessIndex++;

    }

  }

  swap(arr, first, lessIndex - 1)

  //console.log(arr);

  return lessIndex;

}

function swap(arr, x, y) {
  var temp = arr[y];
  arr[y] = arr[x];
  arr[x] = temp;
}

test1 = [4, 6, 13, 5, 2, 7, 34, 12, 64, 1, 71, 6]
test2 = [5, 3, 135, 3, 6]
test3 = [1]
test4 = [4, 6, 13, 6, 2, 7, 346, 15, 64, 246, 2, 6, 64]

quickSort(test1)
quickSort(test2)
quickSort(test3)
quickSort(test4)
  // console.log(quickSort(test1))
  // console.log(quickSort(test2))
  // console.log(quickSort(test3))

console.log(test1)
console.log(test2)
console.log(test3)
console.log(test4)

//quickSort(test2)