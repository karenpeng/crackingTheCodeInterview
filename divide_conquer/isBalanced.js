var isBalance = function(root){
  return checkHeight(root) !== -1
}

function checkHeight(root){
  if(root === null) return 0

  var l = checkHeight(root.left)
  if(l === -1) return -1

  var r = checkHeight(root.right)
  if(r === -1) return -1 

  var diff = Math.abs(l - r)
  if(diff > 1) return -1
  return Math.max(l, r) + 1
}