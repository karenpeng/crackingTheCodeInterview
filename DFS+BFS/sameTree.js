function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var isSameTree = function(p, q) {
  if(p === null && q === null) return true
  if(p === null || q === null) return false
  console.log('hahaha')
  return p.val === q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right) 
}

var a = new TreeNode(1)
var b = new TreeNode(2)
var c = new TreeNode(3)
var d = new TreeNode(4)
var e = new TreeNode(5)
var f = new TreeNode(6)
var g = new TreeNode(7)

a.left = b
a.right = c
b.left = d
b.right = e
c.left = f
c.right = g

isSameTree(a, a)