/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
    if(root === null) return 0
    var l = minDepth(root.left)
    var r = minDepth(root.right)
    if (l === 0 && r === 0) return 1
    //这里这么细心 肯定也记不住了
    if (l === 0) l = Infinity
    if (r === 0) r = Infinity
    return Math.min(l, r) + 1
};