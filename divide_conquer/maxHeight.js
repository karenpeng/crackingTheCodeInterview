var maxHeight = function(root){
  if(root === null) return 0
  return Math.max(maxHeight(root.left), maxHeight(root.right)) + 1
}