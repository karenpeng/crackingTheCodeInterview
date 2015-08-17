function factorial(n){
  if(n === 1) return 1
  return n*factorial(n-1)
}

function factorial1(n){
  var f = []
  f[1] = 1
  for(var i = 2; i <=n; i++){
    f[i] = i * f[i-1]
  }
  return f[i]
}

function factorial2(n){
  if(n===0 || n===1) return n
  var pre = 1
  for(var i = 2; i <= n; i++){
    var cur = i * pre
    pre = cur
  }
  return cur
}