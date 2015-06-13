/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    var fast = head
    var slow = head
    
    while(fast !== null && fast.next !== null){
        fast = fast.next.next
        slow = slow.next
        if(fast === slow){
            break
        }
    }
    
    if(fast === null || fast.next === null) return null
    
    slow = head
    while(slow !== fast){
        slow = slow.next
        fast = fast.next
    }
    
    return slow
    
};