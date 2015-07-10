 function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
 }

var kthSmallest = function(root, k) {
    var result = helper(root, k)
    //return result[k-1]
    return result
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
    console.log(result)
    if(result.length === k){return result[result.length-1]}
    result = result.concat(r)
    return result
}

var a = new TreeNode(1)
var b = new TreeNode(2)
var c = new TreeNode(0)
a.right = b
a.left = c

console.log(kthSmallest(a, 1))