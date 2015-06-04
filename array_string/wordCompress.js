//'aaabb' -> 'a3b2'
//'abab' -> 'abab'

/*
1. naive approach:
open up another array in the memory
 */
function compress1(str) {
  var counter = 1
  var result = ''
  var i = 0
  var start = str[0]
  while (i < str.length) {
    if (str[i + 1] === start) {
      counter++
    } else {
      if (counter > 1) {
        result += start + counter
      } else {
        result += start
      }
      start = str[i + 1]
      counter = 1
    }
    i++
  }
  return result
}

console.log(compress1('abab'))
console.log(compress1('aaaa'))
console.log(compress1('ababaabb'))

/*
 2. in place approach
 */
console.log(' ')

function compress2(str) {

  //str = Array.prototype.slice.call(arguments, 0)
  //console.log(str)

  var start = str[0]
  var counter = 1
  var i = 0
  var j = 0

  while (i < str.length) {

    if (str[i + 1] === start) {
      //console.log('here')
      counter++

    } else {

      if (counter > 1) {
        //console.log('there')
        //str.splice(i + 1, counter - 1, counter)
        str = str.slice(0, i - counter) + counter + str.slice(i, str.length - 1)

        i -= (counter - 1)

      }

      start = str[i + 1]
        //j++
      counter = 1

    }

    i++
  }

  return str.toString()
}

console.log(compress2('abab'))
console.log(compress2('aaaa'))
console.log(compress2('ababaabb'))