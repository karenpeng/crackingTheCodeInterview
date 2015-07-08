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


//1.bottom to up
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
    var l = helper(start, mid, lists)
    var r = helper(mid+1, end, lists)
    
    return mergeTwoList(l, r)
    
}

//2.up to bottom
var mergeKLists2 = function(lists) {
    if(lists.length < 1) return null
    return helper2(lists)
}

function helper2(arr){
    if(arr.length ===1) return arr[0]
    var level = []
    var i = 0
    while(i<arr.length-1){
        level.push(mergeTwoList(arr[i], arr[i+1]))
        i+=2
    }
    if(arr.length % 2 === 1) level.push(arr[arr.length-1])
    
    return helper2(level)
}


//方法三
var mergeKLists3 = function(lists) {
    if(lists.length < 1) return null
    while(lists.length > 1){
        var level = []
        var i = 0
        while(i<lists.length-1){
            level.push(mergeTwoList(lists[i], lists[i+1]))
            i+=2
        }
        if(lists.length % 2 === 1) level.push(lists[lists.length-1])
        //直接赋值omg
        lists = level
    }
    return lists[0]
}

