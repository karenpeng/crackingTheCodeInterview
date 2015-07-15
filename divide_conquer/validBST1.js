/**
 * Definition for a binary tree node.
 * function TreeNode(key) {
 *     this.key = key;
 *     this.left = this.right = null;
 * }
 */
 function TreeNode(key) {
    this.key = key;
    this.left = this.right = null;
 }
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
// var isValidBST = function(root) {
//     return helper(root) !== false
// }

// function helper(root){
//     var result = []
//     if(root === null) return []
    
//     var l = helper(root.left)
//     var r = helper(root.right)

//     console.log('l', l)
//     console.log('r', r)

//     if( l === false || r === false ) return false
    
//     result = result.concat(l)
//     console.log('result ', result)
//     if(result.length === 0) {
//         result.push(root.key)
//         console.log(':)', result, root.key)
//     }
//     else{
//         if(result[result.length -1] < root.key) result.push(root.key)
//         else return false
//     }
//     result = result.concat(r)
    
//     return result 
// }

var isValidBST = function(root) {
    var result = []
    return helper(root, result)
}

function helper(root, result){
    if(root === null) return true

    var l = helper(root.left, result)
    if(l===false) return false
    

    if(result.length === 0) {
        result.push(root.key)
    }
    else{
        if(result.pop() < root.key) result.push(root.key)
        else return false
    }
    
    var r = helper(root.right, result)
    if(r===false) return false   

    return true
}

var a = new TreeNode(0)
a.left = new TreeNode(-1)
a.right = null
console.log(isValidBST(a))

