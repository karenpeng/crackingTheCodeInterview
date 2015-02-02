function quickSort(arr) {
  _quickSort(arr, 0, arr.length - 1);
}

function _quickSort(arr, first, last) {

  if (first >= last) {

    return;

  } else {
    var pivot = partition(arr, first, last);

    _quickSort(arr, first, pivot - 1);
    _quickSort(arr, pivot + 1, last);
  }
}

function partition(arr, first, last) {
  var pivot = arr[first];
  var left = first + 1;
  var right = last;
  var done = false;

  while (!done) {
    while (left <= right && arr[left] <= pivot) {
      left++;
    }
    while (left <= right && arr[right] >= pivot) {
      right--;
    }
    if (right < left) {
      done = true;
    } else {
      swap(arr, left, right);
    }
  }

  swap(arr, first, last);
  return right;

}

function swap(arr, x, y) {
  var temp = arr[y];
  arr[y] = arr[x];
  arr[x] = temp;
}

test1 = [4, 6, 13, 6, 2, 7]
test2 = [5, 3, 135, 3, 6]
test3 = [1]

quickSort(test1)
quickSort(test2)
quickSort(test3)
  // console.log(quickSort(test1))
  // console.log(quickSort(test2))
  // console.log(quickSort(test3))

console.log(test1)
console.log(test2)
console.log(test3)

//quickSort(test2)