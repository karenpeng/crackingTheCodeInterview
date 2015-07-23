function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}


function main(root){
  if(root === null) return 0
  var result = []
  var max = []
  max[0] = -Infinity
  helper(root, result, max)
  return max[0]
}

function helper(root, result, max){
  result.push(root.val)
  if(root.left === null && root.right === null){
    if(max[0] < sum(result)) max[0] = sum(result)
  }
  if(root.left !== null) {
    helper(root.left, result, max)
    result.pop()
  }
  if(root.right !== null) {
    helper(root.right, result, max)
    result.pop()
  }

}

function sum(arr){
    var s = 0
    arr.forEach(function(el){
        s += el
    })
    return s
}


function main1(root){
  if(root === null) return 0
  var l = main1(root.left)
  var r = main1(root.right)
  return root.val + Math.max(l, r)
}

var a = new TreeNode(1)
a.left = new TreeNode(0)

var b = new TreeNode(1)
b.left = a

var c = new TreeNode(2)
c.left = b
c.right = a

console.log(main(null))
console.log(main(new TreeNode(0)))
console.log(main(a))
console.log(main(b))
console.log(main(c))

console.log('~~~~~~~~~~~~')

console.log(main1(null))
console.log(main1(new TreeNode(0)))
console.log(main1(a))
console.log(main1(b))
console.log(main1(c))

//time and space?????