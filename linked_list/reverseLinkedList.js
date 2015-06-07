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


function reverse(head){
  if(head === null || head.next === null) return head
  
  var prev = null
  var temp = head.next

  //do while!!!
  do{
    head.next = prev
    prev = head
    head = temp
    temp = temp.next

  }while(temp !== null)

  head.next = prev

  return head

}

print(d)
console.log('---')
print(reverse(d))


function print(head){
  n = head
  while(n !== null){
    console.log(n.data)
    n = n.next
  }
}