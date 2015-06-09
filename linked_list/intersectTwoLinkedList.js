function getIntersectionNode(head1, head2){
  if(head1 === null || head2 === null) return null
  var p = head1
  var q = head2
  var count1 = 0;
  var count2 = 0;

  while(p !== null){
    p = p.next
    count1 ++
  }

  while(q !== null){
    q = q.next
    count2 ++
  }

  var gap = count1 - count2

  console.log(gap)
  
  p = head1
  q = head2

  for(var i = 0; i < gap; i++){
    if(gap > 0){
      p = p.next
    }else{
      q = q.next
    }
  }

  while( p !== null && q !== null){
    console.log(p, q)
    if(p === q) {
      console.log('ouch' + p)
      return p
    }
    p = p.next
    q = q.next
  }
}

function Node(data, node){
  this.data = data
  this.next = node
}

var a = new Node(100, null)

var b = new Node(10, a)

var c = new Node(0, a)

console.log(getIntersectionNode(b, c))

