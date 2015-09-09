//http://codeanytime.blogspot.com/2014/12/sort-colors-ii.html

function sortColorII(colors, k){

  for(var i = 0; i < colors.length; i++){
    
    //only deal with not bucket
    if(colors[i] > 0){
      
      //pos is 1 index instead of zero index
      //because if your array is [2,3,1]
      //you will have [2, -1, -1]
      //you lose the information of the last one
      
      //so that why we do [-1, -1, -1]
      var pos = colors[i] - 1

      if(colors[pos] > 0){
        colors[i] = colors[pos]
        colors[pos] = -1

        //important!!!
        //i-- is very important here
        //because when you init the bucket
        //you put the original info in the bucket somewhere else
        //what if that some where else is infront of you
        //then it will never be taken care of
        //i--
        console.log(i)
      }else {
        colors[pos] --
        colors[i] = 0
        i--
      }
    }
  }

  //console.log(colors)
  //console.log(colors.length)

  var a = colors.length - 1
  var b = -colors[k - 1]
  while(k > 0){
    for(var i = 0; i < b; i++){
      colors[a] = k
      a--
    }
    k--
    b = -colors[k - 1]
  }

  //console.log(colors)
  //console.log(colors.length)

}



sortColorII([2,1,1,2,2], 2)