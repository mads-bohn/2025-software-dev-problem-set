var reverseList = function(head) {
    let prev = null;
    let curr = head;

    while (curr) {
        let tempNext = curr.next;
        curr.next = prev;
        prev = curr;
        curr = tempNext;
    }

    return prev;
};