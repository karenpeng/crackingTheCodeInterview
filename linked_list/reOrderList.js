/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */

 function ListNode(val) {
    this.val = val;
    this.next = null;
 }

var reorderList = function(head) {
    if(head === null || head.next === null) return
    //find mid
    var mid = findMid(head)
    var rr = mid.next
    mid.next = null
    //reverse
    var r = reverse(rr)
    //merge
    merge(head, r)
}

function findMid(head){
    //fast是从next开始的！
    var fast = head.next
    var slow = head
    while(fast !== null && fast.next !== null){
        fast = fast.next.next
        slow = slow.next
    }
    return slow
}

function reverse(head){
    if(head === null || head.next === null) return head
    //null就可以了！！！
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

function merge(l1, l2){
    var dummy = new ListNode(null)
    var head = dummy;
    var i = 0;
    while(l1 !== null && l2 !== null){
        if(i % 2 === 0){
            dummy.next = l1
            l1 = l1.next
        }else{
            dummy.next = l2
            l2 = l2.next
        }
        dummy = dummy.next
        i++
    }
    //跟arry不一样，这里用if就可以了 不用用while
    if(l1 !== null) dummy.next = l1
    if(l2 !== null) dummy.next = l2
}


var a = new ListNode(1)
var b = new ListNode(2)
var c = new ListNode(3)
var d = new ListNode(4)
a.next = b
b.next = c
//c.next = d

console.dir(reorderList(a))


