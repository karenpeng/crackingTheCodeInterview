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


function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var sumNumbers = function(root) {
    if(root === null) return 0
    var sum = 0
    var carry = 0
    return helper(root, sum, carry)
};

function helper(root, sum, carry){
    console.log(root)
    if(root === null) return 0
    //这里好巧妙，把数字带入下一个循环
    //然后再进位
    carry *= 10
    carry += root.val
    if(root.left === null && root.right === null) return sum + carry
    return helper(root.left, sum, carry) + helper(root.right, sum, carry)
}



var a = new TreeNode(0)
a.left = new TreeNode(1)

console.log(sumNumbers(a))