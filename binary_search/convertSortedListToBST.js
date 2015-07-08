/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
    if(head === null) return null
    
    var result = findMid(head)
    var mid = result.slow
    var pre = result.pre
    var root = new TreeNode(mid.val)
    //这一句是关键 如果pre是空 其实只有一个node了那直接返回上一层就好了
    if(pre === null) return root
    root.right = sortedListToBST(mid.next)
    pre.next = null
    root.left = sortedListToBST(head)
    return root
}

function findMid(head){
    if(head === null || head.next === null)return {
        slow: head,
        pre: null
    }
    var fast = head
    var slow = head
    var pre = slow
    while(fast!==null && fast.next !==null){
        pre = slow
        fast = fast.next.next
        slow = slow.next
    }
    return {
        slow: slow,
        pre: pre
    }
}