/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

 function ListNode(val) {
     this.val = val;
     this.next = null;
 }

//1.top to bottom
var mergeKLists = function(lists) {
    if(lists.length < 1) return null
    //全部合起来然后一半一半
    //divide and conquer
    return helper(0, lists.length-1, lists)
    
};

function helper(start, end, lists){
    if(start === end){
        return lists[start]
    }
    
    var mid = Math.floor((start + end) / 2)
    console.log(mid)
    var l = helper(start, mid, lists)
    var r = helper(mid+1, end, lists)
    
    return mergeTwoList(l, r)
    
}

function mergeTwoList(list1, list2){
    var dummy = new ListNode(null)
    var head = dummy
    while(list1 !== null && list2 !== null){
        if(list1.val < list2.val){
            dummy.next = list1
            list1 = list1.next
        }else{
            dummy.next = list2
            list2 = list2.next
        }
        dummy = dummy.next
    }
    while(list1!== null){
        dummy.next = list1
        list1 = list1.next
        dummy = dummy.next
    }
    while(list2!== null){
        dummy.next = list2
        list2 = list2.next
        dummy = dummy.next
    }
    return head.next
}

var a = new ListNode(null)
var b = new ListNode(null)

console.log(mergeKLists([a, b]))


//2.bottom to top