var addTwoNumbers = function(l1, l2) {
    let num1 = "";
    let num2 = "";

    let cur = l1;
    while (cur !== null) {
        num1 = cur.val.toString() + num1;
        cur = cur.next;
    }

    cur = l2;
    while (cur !== null) {
        num2 = cur.val.toString() + num2;
        cur = cur.next;
    }

    let sum = (parseInt(num1) + parseInt(num2)).toString();
    let dummy = new ListNode();
    let res = dummy;

    for (let i = sum.length; i >= 0; i--) {
        dummy.next = new ListNode(parseInt(sum[i]));
        dummy = dummy.next;
    }

    return res.next;
};