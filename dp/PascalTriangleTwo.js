/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var generate = function(numRows) {
    if(numRows < 1) return []
    //state: f[x][y]
    //function: f[x][y] = f[x-1][y-1] + f[x][y-1]
    //init: f[0][0] = 1
    //return the whole thing
    var pre = []
    pre[0] = []
    pre[0][0] = 1
    
    var cur = []
    
    for(var i = 1; i < numRows; i++){
        for(var j = 0; j < i+1; j++){
            
            if(pre[j-1] === undefined){
                cur[j] = pre[j]
            }
            else if(pre[j] === undefined){
                cur[j] = pre[j-1]
            }
            else cur[j] = pre[j-1] + pre[j]
        }
        pre = cur
        cur = []
    }
    console.log(pre)
    return cur
};

generate(3)