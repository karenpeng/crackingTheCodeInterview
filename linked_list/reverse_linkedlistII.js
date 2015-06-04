function Node(data, node){
  this.data = data
  this.next = node
}

var e = new Node(5, null)
var d = new Node(4, e)
var c = new Node(3, d)
var b = new Node(2, c)
var a = new Node(1, b)

function print(head){
  n = head
  while(n !== null){
    console.log(n.data)
    n = n.next
  }
}

function reverse(head, m, n){
   if(head === null || head.next === null || head.next.next === null) return head
  // 0->1->2->3->4->5->null
  // 
  // 走m步 记住0和1 然后走n-m步 记住3和4
  // 然后把123翻转
  // 然后把0连去3  1连去4
  var headHead = head
  
  var beginCount = 0
  var endOfFisrtPart = head

  while(beginCount < m-1){
    endOfFisrtPart = endOfFisrtPart.next
    beginCount++
  }

  console.log('~~~~~1st')
  console.log(endOfFisrtPart, beginCount, m)
  console.log('----')

  var endCount = 0
  var startOfThirdPart = endOfFisrtPart
  console.log(m, n, endCount)

  while(endCount < (m - n) ){
    console.log('ouch')
    //startOfThirdPart = startOfThirdPart.next
    // console.log('((')
    // console.log(startOfThirdPart)
    // console.log('))')
    endCount++
  }

  // console.log('~~~~~3rd')
  // console.log(startOfThirdPart, endCount, n)
  // console.log('----')

  // var head = endOfFisrtPart.next
  // var prev = startOfThirdPart
  // var temp = head.next
  //console.log(head, '-', prev, '-', temp)

  // while(temp.next !== startOfThirdPart){
  //   head.next = prev
  //   prev = head
  //   head = temp
  //   temp = temp.next
  //   console.log(temp)
  //   console.log('-')
  // }
  // head.next = prev

  // endOfFisrtPart.next = head

  // return headHead

}

//print(a)
//console.log('---')
//print(reverse(d))
reverse(a, 2, 4)

