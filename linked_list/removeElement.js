function removeElements(head, value){
  if(head === null) return null
  //add a node in front of head
  var dummy = new Node(0, head)
  var prev = dummy
  var p = prev.next

  while(p!== null){
    if(p.data === value){
      prev.next = p.next
    }else{
      prev = prev.next
    }
    p = prev.next
  }

  return dummy.next

}

function Node(data, node){
  this.data = data
  this.next = node
}

var a = new Node(1, null)
console.log(removeElements(a, 1))

var b = new Node(0, a)
console.log(removeElements(b, 0))

var c = new Node(0, b)
console.log(removeElements(c, 0))