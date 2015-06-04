function Node(data, node){
  this.data = data
  this.next = node
}

function Node(data, node){
  this.data = data
  this.next = node
}

var f = new Node(1, null)
var a = new Node(1, f)
var e = new Node(0, a)
var b = new Node(2, e)
var c = new Node(3, b)
var d = new Node(2, c)

function nToLast(head, k){
  if(head === null) return 0
  var i = nToLast(head.next, k) + 1
  if(i === k) console.log(head.data)
  return i
}

function print(head){
  n = head
  while(n !== null){
    console.log(n.data)
    n = n.next
  }
}

print(d)
console.log('-')
nToLast(d, 4)