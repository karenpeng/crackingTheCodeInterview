/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
   if(root === null) return false
   var result = 0
   return helper(root, result, sum)
};

function helper(root, result, sum){
    if(root === null) return false //node does not exist
    result += root.val
    if(root.left === null && root.right === null){
        return result === sum
    }
    return helper(root.left, result, sum) || helper(root.right, result, sum)
}
