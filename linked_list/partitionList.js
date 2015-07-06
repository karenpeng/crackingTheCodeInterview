// /**
//  * Definition for singly-linked list.
//  * function ListNode(val) {
//  *     this.val = val;
//  *     this.next = null;
//  * }
//  */
// /**
//  * @param {ListNode} head
//  * @param {number} x
//  * @return {ListNode}
//  */

// var partition = function(head, x) {
//     //swap wont work because it changes the order
//     // var dummy = new ListNode(0)
//     // dummy.next = head
//     // var bigPointer = dummy
//     // var smallPointer = dummy.next
    
//     // while(smallPointer !== null){
//     //     if(bigPointer.val < x){
//     //         bigPointer = bigPointer.next
//     //         smallPointer = smallPointer.next
//     //     }else{
//     //         if(smallPointer.val < x){
//     //             //swap!!!
//     //             var temp = smallPointer.val
//     //             smallPointer.val = bigPointer.val
//     //             bigPointer.val = temp
//     //         }else{
//     //             smallPointer = smallPointer.next
//     //         }
//     //     }
//     // }


//     // leetcode says time limit exceeds
//     // var bigBegin = null
//     // var bigEnd = null
//     // var smallBegin = null
//     // var smallEnd = null
//     // var runner = head

//     // if(runner === null) return null

//     // while(runner !== null){
//     //   if(runner.val < x){

//     //     if(smallBegin === null){
//     //       smallBegin = runner
//     //       smallEnd = smallBegin
//     //     }else{
//     //       smallEnd.next = runner
//     //       smallEnd = runner
//     //     }

//     //   }else{
//     //     if(bigBegin === null){
//     //       bigBegin = runner
//     //       bigEnd = smallBegin
//     //     }else{
//     //       bigEnd.next = runner
//     //       bigEnd = runner
//     //     }
//     //   }
//     //   runner = runner.next
//     // }

//     // if(bigEnd === null) return smallBegin

//     // bigEnd.next = smallBegin
//     // return bigBegin

//     if(head === null) return null

//     var headHead = new ListNode(0)

//     headHead.next = head

//     var before = headHead
//     var p = before.next
    
//     while(p!== null && p.val < x){
//       before = p
//       p = p.next
//     }
    
//     if(p === null) return head
    
//     var pre = before

//     var runner = p


//     while( runner !== null){

//       if(runner.val < x){
//         //put runner in front of p
//         before.next = runner
//         pre.next = runner.next
//         runner.next = p
        
//       }
      
//       pre = pre.next
//       runner = pre.next
      
//     }
//     return headHead.next 

// };


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
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    var l = new ListNode(null)
    var r = new ListNode(null)
    var headHead = l
    var tailHead = r
    
    while(head!== null){
        if(head.val < x){
            l.next = head
            l = l.next
        }else{
            r.next = head
            r = r.next
        }
        head = head.next
    }
    
    l.next = tailHead.next
    r.next = null
    
    return headHead.next
};

var a = new ListNode(3)
var b = new ListNode(1)
a.next = b

console.log(partition(a, 2))