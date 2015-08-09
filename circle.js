function doesCircleExist(commands) {

    // var hash = {}
    // hash['0|0'] = true
    var x = 0
    var y = 0
    var xFlag = -1
    //console.log(commands)
    for(var i = 0 ; i < commands.length; i++){
        if(commands[i] === 'G'){
                if(xFlag === -1) y --
                else if(xFlag === 0) x++
                else x --
                //console.log(x, y, xFlag)
                // if(hash.hasOwnProperty(x+'|'+y)) {console.log('YES'); return 'YES'}
                // else hash[x+'|'+y] = true
                //break
         }
        if(commands[i] === 'R'){
            
                xFlag = 0
        }
                //break
        if(commands[i] === 'L'){
                xFlag = 1
                //break
        }
    }
    //console.log(hash, xFlag)
    for(var i = 0; i < commands.length; i++){

         if(commands[i] === 'G'){
                if(xFlag === -1) y --
                else if(xFlag === 0) x++
                else x --
                // console.log(x, y, xFlag)
                // if(hash.hasOwnProperty(x+'|'+y)) {console.log('YES'); return 'YES'}
                // else hash[x+'|'+y] = true
                //break
         }
        if(commands[i] === 'R'){
            
                xFlag = 0
        }
                //break
        if(commands[i] === 'L'){
                xFlag = 1
                //break
        }
    }
    // console.log('why')
    // console.log(hash)
    // if(hash.hasOwnProperty(x+'|'+y)) {console.log('YES'); return 'YES'}
    // else{
    //     console.log('NO'); 
    //     return 'NO'
    // }
    console.log(x, y)
    //if(x ===0 && y === 0)
}


//doesCircleExist('L')

doesCircleExist('GRGL')