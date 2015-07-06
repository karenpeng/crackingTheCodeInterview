/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
  var dummy = new ListNode(null)
  dummy.next = head
    
  var begin = dummy
  for(var i = 0; i < m - 1; i++){
      begin = begin.next
  }
  var end = head
  for(i = 0; i < n; i++){
      end = end.next
  }

  var pre = end
  var cur = begin.next
  var temp = cur.next
  
  while(temp !== null && temp !== end){
    cur.next = pre
    pre = cur
    cur = temp
    temp = temp.next
  }
  cur.next = pre
  begin.next = cur
  
  return dummy.next

};