/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
   if(root === null) return []
   var queue = []
   var result = []
   queue.push(root)
   while(queue.length > 0){
       var size = queue.length

       //@IMPORTANT!!! resut level
       var level = []
       for(var i = 0; i < size; i++){
           var _root = queue.shift()
           level.push(_root.val)
           if(_root.left !== null) queue.push(_root.left)
           if(_root.right !== null) queue.push(_root.right)
       }
       result.push(level)
   }
   return result
};