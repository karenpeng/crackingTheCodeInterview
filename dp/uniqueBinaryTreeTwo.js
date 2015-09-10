
 // Definition for a binary tree node.
 function TreeNode(val) {
     this.val = val;
     this.left = this.right = null;
 }
 
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
    
    return helper(1, n)
    
};

function helper(min, max){
    
    var output = []
    if(min > max){
        output.push(null)
        return output
    }

    for(var i = min; i <= max; i++){
        var leftSubTree = helper(min, i - 1)
        var rightSubTree = helper(i+1, max)
        
        console.log(leftSubTree.length, rightSubTree.length)
        for(var j = 0; j < leftSubTree.length; j++){
            for(var k = 0; k < rightSubTree.length; k++){
                var root = new TreeNode(i)
                root.left = leftSubTree[j]
                root.right = rightSubTree[k]
                console.log(root)
                output.push(root)
            }
        }
    }
 
    return output
}



generateTrees(3)