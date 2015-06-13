/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */

var partition = function(head, x) {
    //swap wont work because it changes the order
    // var dummy = new ListNode(0)
    // dummy.next = head
    // var bigPointer = dummy
    // var smallPointer = dummy.next
    
    // while(smallPointer !== null){
    //     if(bigPointer.val < x){
    //         bigPointer = bigPointer.next
    //         smallPointer = smallPointer.next
    //     }else{
    //         if(smallPointer.val < x){
    //             //swap!!!
    //             var temp = smallPointer.val
    //             smallPointer.val = bigPointer.val
    //             bigPointer.val = temp
    //         }else{
    //             smallPointer = smallPointer.next
    //         }
    //     }
    // }
    

    if(head === null) return null

    var headHead = new ListNode(0)

    headHead.next = head

    var before = headHead
    var p = before.next
    
    while(p!== null && p.val < x){
        before = p
        p = p.next
    }
    
    if(p === null || p.next === null) return head
    
    var pre = p

    var runner = p.next

    var pos = runner.next

    while( pos !== null){

      if(runner.val < x){
        //put runner in front of p
        before.next = runner
        runner.next = p
        pre.next = pos
      }
      
      pre = pre.next
      runner = pre.next
      pos = runner.next
    }
    
    return headHead.next

};