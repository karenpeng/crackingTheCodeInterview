function intersectTwoLinkedList(head1, head2){
  var p = head1
  var q = head2

  while( p !== null  q !== null){
    if(equalsTo(p,q))
  }
}

function equalsTo(node1, node2){
  if(node1.data === node2.data){
    equalsTo(node1.next, node2.next)
    return true
  }else{
    return false
  }
}