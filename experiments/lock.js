function block(){
  var lock = false
  
  return function dosomething(){
    if(!lock){
      console.log('coo')
      lock = true
    }
    setTimeout(function(){
      lock = false
    },6000)
  }
}

var test = block()

setInterval(function(){
  test()
},1000)