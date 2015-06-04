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

function removeDuplicate(head){
  var record = {}
  var n = head
  //this is the hard part!!! previous!
  var previous = null
  while(n !== null){
    if(record[n.data]){
      //return false
      previous.next = n.next 
    }
    record[n.data] = true
    //return true
    previous = n
    n = n.next
  }
  return head
}

print(d)
console.log('-')
removeDuplicate(d)
print(d)

function print(head){
  n = head
  while(n !== null){
    console.log(n.data)
    n = n.next
  }
}