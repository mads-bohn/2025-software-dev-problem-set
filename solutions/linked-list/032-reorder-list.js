var reorderList = function(head) {

    // find center of list
    let slow = head;
    let fast = head.next;
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // reverse second half
    let second = slow.next;
    let prev = (slow.next = null);
    while (second !== null) {
        let temp = second.next;
        second.next = prev;
        prev = second;
        second = temp;
    }

    // merge lists
    let first = head;
    second = prev;
    while (second !== null) {
        const temp1 = first.next;
        const temp2 = second.next;
        first.next = second;
        second.next = temp1;
        first = temp1;
        second = temp2;
    }
};