var doSearch = function (array, targetValue) {
  var min = 0;
  var max = array.length - 1;
  var guess = Math.floor((max + min) / 2);
  var arr = [];

  if (array[guess] === targetValue) {

    return guess;

  } else if (array[guess] > targetValue) {

    arr = array.slice(min, guess - 1);

  } else {

    arr = array.slice(guess, max);
  }

  doSearch(arr, targetValue);

  return -1;
};

test4 = [2, 2, 4, 6, 6, 6, 7, 13, 15, 64, 64, 246, 346]

doSearch(test4, 6)