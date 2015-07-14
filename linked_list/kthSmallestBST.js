/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
// var kthSmallest = function(root, k) {
//     var result = helper(root, k)
//     return result[k-1]
// };

// function helper(root,k){
//     var result = []
//     if(root === null) return result
//     var l = helper(root.left, k)
//     var r = helper(root.right, k)
    
//     result = result.concat(l)
//     result.push(root.val)
//     result = result.concat(r)
//     return result
// }

var kthSmallest = function(root, k) {
    return helper(root, k)
};

function helper(root,k){
    var result = []
    
    if(root === null) return result
    var l = helper(root.left, k)
    var r = helper(root.right, k)

    if(typeof l === 'number') return l
    if(typeof r === 'number') return r
    
    result = result.concat(l)
    result.push(root.val)
    if(result.length === k){return result[result.length-1]}
    result = result.concat(r)
    return result
}