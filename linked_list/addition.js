/**
 * Definition for singly-linked list.
**/
function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  var p = l1
  var q = l2

  if(p === null) return q
  if(q === null) return p

  var head = new ListNode(0)
  var result = head
  var carry = 0

  while( p !== null || q !== null){
    
    var a = p === null? 0 : p.val
    var b = q === null? 0 : q.val

    //0      ->1           ->2->3->null
    //result  result.next
    
    //0      ->1         ->2      ->3->null
    //       result ->  result.next

    //tricky part: do it for its next
    result.next = new ListNode((a + b + carry) % 10)
    carry = Math.floor((a + b + carry) / 10)

    result = result.next

    p = p === null ? null : p.next
    q = q === null ? null : q.next

  }

  //you will miss the carry if both of the nodes are already null
  if(carry > 0)
    result.next = new ListNode(1)

  //tricky part b/c it's one node off
  return head.next

};

var a = new ListNode(8)
a.next = new ListNode(1)

console.log(addTwoNumbers(a, new ListNode(1)))
