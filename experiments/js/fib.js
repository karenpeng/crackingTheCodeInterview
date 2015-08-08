function fib1(n){
  if(n === 0 || n === 1) return n
  return fib1(n-1) + fib1(n-2)
}

var hash = {}
function fib2(n){
  if(n === 0 || n === 1) return n
  if(!hash.hasOwnProperty(n)) hash[n] = fib3(n-1) + fib3(n-2)
  return hash[n]
}

function fib3(_n){
  var f = []
  f[0] = 0
  f[1] = 1
  for(var n = 2; n <= _n; n++){
    f[n] = f[n-1] + f[n-2]
  }
  return f[_n]
}

function fib4(n){
  if(n===0||n===1) return n
  var a = 0
  var b = 1
  for(var i = 2; i <= n; i++){
    var c = a + b
    a = b
    b = c
  }
  return c
}

console.log(fib3(100))
console.log(fib4(100))