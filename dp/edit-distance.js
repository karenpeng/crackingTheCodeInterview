/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
 
// state: f[i][j]a的前i个字符“配上”b的前j个字符
// 最少要用几次编辑使得他们相等

// function:
// f[i][j] = MIN(f[i-1][j-1], f[i-1][j]+1, f[i][j-1]+1) // a[i] == b
// [j]
// = MIN(f[i-1][j], f[i][j-1], f[i-1][j-1]) + 1 // a[i] != b[j]

// init: f[i][0] = i, f[0][j] = j

// answer: f[a.length()][b.length()]
var minDistance = function(word1, word2) {
    //其中一个为0就不会进入下面的nested for loop 所以要手写这个edge case
    if(word1.length === 0) return word2.length
    if(word2.length === 0) return word1.length

    var f = []
    f[0] = []
    f[0][0] = 0;
    
    for(var i = 1; i < word1.length + 1; i++){
        f[i] = [];
        f[i][0] = i;
        
        for(var j = 1; j < word2.length + 1 ; j++){
            f[0][j] = j;
            
            if(word1[i-1] === word2[j-1]){
                f[i][j] = Math.min(f[i-1][j-1])
            }else{
                                  //插入         //删除        //替换
                f[i][j] = Math.min(f[i][j-1]+1, f[i-1][j]+1, f[i-1][j-1]+1)
            }
        }  
    }
    console.log(f)
    return f[word1.length][word2.length]
};

console.log(minDistance('', 'a'))