// initial intuition
var hasCycle = function(head) {
    const nodes = [];
    while (head) {
        if (nodes.includes(head.next)) {
            return true;
        }
        nodes.push(head);
        head = head.next;
    }
    return false;
};

// tortise and hare algorithm
var hasCycle2 = function(head) {
    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) return true;
    }

    return false;
};