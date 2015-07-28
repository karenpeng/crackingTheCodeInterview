function fib1(n){
  if(n === 0 || n === 1) return n
  return fib1(n-1) + fib1(n-2)
}

function fib2(n){
  if(n === 0 || n === 1) return n
  var pre0 = 1
  var pre1 = 1
  for(var i = 2; i < n; i++){
    var tem = pre1
    pre1 += pre0
    pre0 = tem
  }
  return pre0
}

var hash = {}
function fib3(n){
  if(n === 0 || n === 1) return n
  if(!hash.hasOwnProperty(n)) hash[n] = fib3(n-1) + fib3(n-2)
  return hash[n]
}