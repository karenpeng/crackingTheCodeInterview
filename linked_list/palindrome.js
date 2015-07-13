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
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if(head === null || head.next === null) return true
    var mid = findMid(head)
    var tem = mid.next
    mid.next = null
    var lastHalf = reverse(tem)
    //console.log(lastHalf)
    while(lastHalf !== null){
        if(head.val !== lastHalf.val) return false
        head = head.next
        lastHalf = lastHalf.next
    }
    return true
};

function findMid(head){
    var fast = head.next
    var slow = head
    while(fast !== null && fast.next !== null){
        fast = fast.next.next
        slow = slow.next
    }
    return slow
}

function reverse(head){
   var dummy = null
   var pre = dummy
   var cur = head
   var tem = cur.next
   while(tem !== null){
       cur.next = pre
       pre = cur
       cur = tem
       tem = tem.next
   }
   cur.next = pre
   return cur
}


var a = new ListNode(0)
var b = new ListNode(0)
a.next = b

isPalindrome(a)
