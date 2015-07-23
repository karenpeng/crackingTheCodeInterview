function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}


function main(root){
  if(root === null) return []
  var result = []
  var arr = []
  helper(root, result, arr)
  return arr
}

function helper(root, result, arr){
  result.push(root.val)
  if(root.left === null && root.right === null){
    arr.push(deepCopy(result))
  }
  if(root.left !== null) {
    helper(root.left, result, arr)
    result.pop()
  }
  if(root.right !== null) {
    helper(root.right, result, arr)
    result.pop()
  }

}

function deepCopy(arr){
    var newArr = []
    arr.forEach(function(el){
        newArr.push(el)
    })
    return newArr
}


console.log(main(null))
console.log(main(new TreeNode(0)))

var a = new TreeNode(1)
a.left = new TreeNode(0)

var b = new TreeNode(1)
b.left = a

var c = new TreeNode(2)
c.left = b
c.right = a

console.log(main(a))
console.log(main(b))
console.log(main(c))

//time and space?????