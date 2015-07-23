function main(root){

  if(root === null) return {
    singlePath: 0,
    maxPath: -Infinity
  }

  var l = main(root.left)
  var r = main(root.right)

  var singlePath = root.val + Math.max(l.singlePath, r.singlePath)
  singlePath = Math.max (0, singlePath)

  var maxPath = Math.max(l.maxPath, r.maxPath)
  maxPath = Math.max(maxPath, root.val + l.singlePath + r.singlePath)

  return {
    singlePath: singlePath,
    maxPath: maxPath
  }


}