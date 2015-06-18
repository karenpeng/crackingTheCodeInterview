//* Definition for singly-linked list.
function ListNode(val) {
 this.val = val;
 this.next = null;
 }

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
//this shit just won't pass the edge case
var removeNthFromEnd = function(head, n) {
    // var dummy = new ListNode(0)
    // dummy.next = head
    
    // var behind = dummy.next
    // var infront = dummy.next
    
    // for(var i =0; i < n-1; i++){
    //     infront = infront.next
    // }
    // while(infront!== null){
    //     behind = behind.next
    //     infront = infront.next
    // }
    // console.log(behind)

    // var pre = behind
    // if(pre === null) return head
    // var cur = behind.next
    // if(cur === null) pre.next = null
    // else pre.next = cur.next
    
    // return dummy.next
    
    
    if(head===null) return null
    
    var dummy = new ListNode(0)
    dummy.next = head
    
    var behind = dummy.next
    var infront = dummy.next
    
    for(var i =0; i< n; i++){
        infront = infront.next
        if(infront===null && i< n-1) return head
    }
    
    if(infront === null) return head.next
    //one node in front cuz you gotta now who's in front of beind 
    //when behind is the nth element you need to delete
    while(infront.next!== null){
        behind = behind.next
        infront = infront.next
    }
    
    behind.next = behind.next.next
    
    return dummy.next
};

console.log(removeNthFromEnd(new ListNode(1), 1))