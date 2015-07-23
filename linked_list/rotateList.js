/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if(head === null || k === 0) return head
    var runner = head
    var len = 0
    while(runner.next !== null){
        runner = runner.next
        len++
    }
    //这里好关键 长度还要加上null那个节点
    len++
    runner.next = head
    
    for(var i = 0; i < len - k % len; i++){
        runner = runner.next
    }
    var newHead = runner.next
    runner.next = null
    return newHead
}


//解题思路]
//首先从head开始跑，直到最后一个节点，这时可以得出链表长度len。然后将尾指针指向头指针，将整个圈连起来，接着往前跑len – k%len，从这里断开，就是要求的结果了。
//http://fisherlei.blogspot.com/2013/01/leetcode-rotate-list.html

//这么巧妙，肯定记不住啦。。。