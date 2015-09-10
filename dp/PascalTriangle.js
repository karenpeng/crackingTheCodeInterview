/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if(numRows < 1) return []
    //state: f[x][y]
    //function: f[x][y] = f[x-1][y-1] + f[x-1][y]
    //init: f[0][0] = 1
    //return the whole thing
    var f = []
    f[0] = []
    f[0][0] = 1
    
    for(var i = 1; i < numRows; i++){
        for(var j = 0; j < i+1; j++){
            if(f[i] === undefined) f[i] = []
            
            if(f[i-1][j-1] === undefined){
                f[i][j] = f[i-1][j]
                //console.log(f[i][j])
            }
            else if(f[i-1][j] === undefined){
                f[i][j] = f[i-1][j-1]
                console.log(f[i][j])
            }
            else f[i][j] = f[i-1][j-1] + f[i-1][j]
        }
    }
    console.log(f)
    return f
};


var generate = function(numRows) {
    if(numRows < 1) return []
    var pre = []
    pre[0] = 1
    
    var cur = []
    
    for(var i = 1; i < numRows; i++){
        for(var j = 0; j < i+1; j++){
            
            if(pre[j-1] === undefined){
                cur[j] = pre[j]
            }
            else if(pre[j] === undefined){
                cur[j] = pre[j-1]
            }
            else cur[j] = pre[j-1]+pre[j]
        }
        pre = cur
        cur = []
    }
  
    return cur
};

generate(4)
