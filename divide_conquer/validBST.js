//1.traverse
var isValidBST = function(root) {
    return helper(root, -Infinity, Infinity)
};

function helper(root, min, max){
    if(root === null) return true
    if(root.val <= min || root.val >= max) return false
    return helper(root.left, min, root.val) && helper(root.right, root.val, max)
}

//2.divide and conquer
var isValidBST = function(root) {
    return helper(root).isBST
};

function helper(root){
    if(root === null){
        return {
            isBST: true,
            min: Infinity,
            max: -Infinity
        }
    }
    var l = helper(root.left)
    var r = helper(root.right)
    
    if(!l.isBST || !r.isBST) return {isBST: false}

    if(root.val <= l.max || root.val >= r.min) return {isBST:false}
    else return{
        isBST: true,
        min: l.min === Infinity? root.val : l.min,
        max: r.max === -Infinity? root.val : r.max
    }
}

//3. inorder traversal
//往下传的是array是一个pass by referrence的东西
var isValidBST = function(root) {
    var arr = []
    return helper(root, arr) !== false
};

function helper(root, arr){
   if(root === null) return true
   
   var l = helper(root.left, arr)
   if(l === false) return false
   
   if(arr.length === 0) arr.push(root.val)
   else{
       if(root.val > arr.pop()) arr.push(root.val)
       else return false
   }
   
   var r = helper(root.right, arr)
   if(r === false) return false
}