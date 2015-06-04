function binarySearch1(array, targetValue) {
  var min = 0;
  var max = array.length - 1;

  while (min <= max) {

    var guess = Math.floor((max + min) / 2);

    console.log(guess)

    if (array[guess] === targetValue) {

      return guess;

    } else if (array[guess] > targetValue) {

      max = guess - 1;

    } else {

      min = guess + 1;
    }

  }
  return -1;

};

function binarySearch2(array, targetValue, min, max) {
  var min = min || 0;
  var max = max || array.length - 1;

  if (max < min) return -1;

  else {

    var guess = Math.floor((max + min) / 2);
    console.log(guess)

    if (array[guess] === targetValue) {

      return guess;

    } else if (array[guess] > targetValue) {

      max = guess - 1;

    } else {

      min = guess + 1;
    }

    return binarySearch2(array, targetValue, min, max);

  }

}

test4 = [2, 2, 4, 6, 6, 6, 7, 13, 15, 64, 64, 246, 346]

console.log(binarySearch1(test4, 6))
console.log('\n--------\n')
console.log(binarySearch2(test4, 6))