/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
 function TreeNode(val) {
     this.val = val;
     this.left = this.right = null;
 }
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

//非递归
var preorderTraversal = function(root) {
    var result = []
    if(root === null) return result
    var stack = []
    stack.push(root)
    while(stack.length > 0){
        var _root = stack.pop()
        result.push(_root.val)
        if(_root.right!==null) stack.push(_root.right)
        if(_root.left!==null) stack.push(_root.left)
    }
    return result
};

//递归
var preorderTraversal = function(root) {
    var result = []
    helper(root, result)
    return result
};
function helper(root, result){
    if(root === null) return
    result.push(root.val)
    helper(root.left, result)
    helper(root.right, result)
};

//divide and conquer
var preorderTraversal = function(root) {
  var result = []
  if(root ===null) return result

  var l = preorderTraversal(root.left)
  var r = preorderTraversal(root.right)
  
  result.push(root.val)
  result = result.concat(l)
  result = result.concat(r)
  
  return result
  
};

var a = new TreeNode(1)
var b = new TreeNode(2)
a.left = b

console.log(preorderTraversal(a))
