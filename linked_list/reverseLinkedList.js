// function Node(data, node){
//   this.data = data
//   this.next = node
// }

// var f = new Node(1, null)
// var a = new Node(1, f)
// var e = new Node(0, a)
// var b = new Node(2, e)
// var c = new Node(3, b)
// var d = new Node(2, c)


// function reverse(head){
//   if(head === null || head.next === null) return head
  
//   var prev = null
//   var temp = head.next

//   //do while!!!
//   do{
//     head.next = prev
//     prev = head
//     head = temp
//     temp = temp.next

//   }while(temp !== null)

//   head.next = prev

//   return head

// }

// print(d)
// console.log('---')
// print(reverse(d))


// function print(head){
//   n = head
//   while(n !== null){
//     console.log(n.data)
//     n = n.next
//   }
// }

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */


function ListNode(val) {
  this.val = val;
  this.next = null;
 }

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if(head === null || head.next === null) return head
    
    var dummy = new ListNode(null)
    dummy.next = head
    
    var pre = dummy
    var cur = dummy.next
    var temp = cur.next
    
    while(temp !== null){
        cur.next = pre
        pre = cur
        cur = temp
        temp = temp.next
    }
    
    cur.next = pre
    return cur
};

var a = new ListNode(1)
var b = new ListNode(2)
a.next = b

console.log(reverseList(a))