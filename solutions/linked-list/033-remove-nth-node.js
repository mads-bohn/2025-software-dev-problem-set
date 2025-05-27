var removeNthFromEnd = function(head, n) {
    const dummy = new ListNode(0, head);
    let left = dummy;
    let right = head;

    for (let i=0; i < n; i++) {
        right = right.next;
    }
        
    while (right !== null) {
        right = right.next;
        left = left.next;
    }

    left.next = left.next.next;
    return dummy.next;
   
};