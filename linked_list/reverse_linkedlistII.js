function Node(data, node){
  this.data = data
  this.next = node
}

var e = new Node(5, null)
var d = new Node(4, e)
var c = new Node(3, d)
var b = new Node(2, c)
var a = new Node(1, b)

c = new Node(3, null)
b = new Node(2, c)
a = new Node(1, b)

function print(head){
  n = head
  while(n !== null){
    console.log(n.data)
    n = n.next
  }
}

function reverse(head, m, n){
   if(head === null || n <= m) return head
  // 1->2->3->4->5->null
  // 1->4->3->2->5->null
  // 走m步 记住1和2 然后走n-m步 记住4和5
  // 然后把234翻转
  // 然后把1连去4  2连去5
  var headHead = head
  var endOfFisrtPart = head

  var dummy = new Node(head, 0)

  //ok below is not right i will come back later
  // //if(m === 1)

  // for(var i = 1; i < m - 1; i++){//because i want the one 
  //   //that is in front of the end
  //   //so m - 1
  //   if(endOfFisrtPart.next === null) return headHead
  //   endOfFisrtPart = endOfFisrtPart.next
  // }

  // var startOfThirdPart = head

  // for(var j = 1; j < n + 1; j++){//because i want the one 
  //   //that is behind the end
  //   //so n + 1
  //   if(startOfThirdPart.next === null) return headHead
  //   startOfThirdPart = startOfThirdPart.next 
  // }

  // console.log(endOfFisrtPart)
  // console.log(startOfThirdPart)

  // var curt = endOfFisrtPart.next
  // var prev = startOfThirdPart
  // var temp = curt.next

  // do{
  //   curt.next = prev
  //   prev = curt
  //   curt = temp
  //   temp = temp.next
  // }while(temp !== startOfThirdPart || temp.next !== null)

  // curt.next = prev
  // endOfFisrtPart.next = curt

  // return headHead

}


print(a)
console.log('---')
//print(reverse(d))
print(reverse(a, 1, 2))
//print(reverse(a, 2, 4))

