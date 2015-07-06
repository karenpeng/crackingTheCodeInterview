/**
 * Definition for singly-linked list.
 * */
function ListNode(val) {
     this.val = val;
    this.next = null;
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  var pre = new ListNode(null)
  pre.next = head
  var headHead = pre
  var cur, pos
  
  if(pre.next !== null) cur = pre.next
  else return null
  
  if(cur.next !== null) pos = cur.next
  else return cur
 
  while(pos !== null){
      if(cur.val === pos.val){
          while(pos !== null && cur.val === pos.val){
            pos = pos.next
          }
          pre.next = pos
      }else{
          pre = cur
      }
      cur = pos
      if(pos!== null) pos = pos.next
  }
  
  return headHead.next
};

var a = new ListNode(1)
var b = new ListNode(1)
var c = new ListNode(3)
a.next = b
b.next = c

console.log(deleteDuplicates(a))
