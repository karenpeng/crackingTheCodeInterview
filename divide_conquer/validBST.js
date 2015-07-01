var isValidBST = function(root) {
    return helper(root, -Infinity, Infinity)
};

function helper(root, min, max){
    if(root === null) return true
    if(root.val <= min || root.val >= max) return false
    return helper(root.left, min, root.val) && helper(root.right, root.val, max)
}