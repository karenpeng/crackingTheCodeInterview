/**
 * Definition for singly-linked list with a random pointer.
 * function RandomListNode(label) {
 *     this.label = label;
 *     this.next = this.random = null;
 * }
 */

 function RandomListNode(label) {
     this.label = label;
     this.next = this.random = null;
 }

/**
 * @param {RandomListNode} head
 * @return {RandomListNode}
 */
var copyRandomList = function(head) {
    if(head === null) return null
    //1.copy然后塞在后面
    //2.copy random pointer
    //3.分离
    var p = head
    
    while(p !== null){
        var node = new RandomListNode(p.label)
        node.next = p.next
        p.next = node
        p = p.next.next
    }
    
    p = head
    while(p !== null){
        if(p.random !== null){
            p.next.random = p.random.next
        }
        p = p.next.next
    }
    
    p = head
    result = p.next
    while(p !== null){
        var temp = p.next
        p.next = p.next.next
        if(temp.next !== null) temp.next = temp.next.next
        p = p.next
        temp = temp.next
    }
    
    return result
};
var a = new RandomListNode(1)
var b = new RandomListNode(2)
var c = new RandomListNode(3)
a.next = b
b.next = c
a.random = c

console.log(copyRandomList(a))