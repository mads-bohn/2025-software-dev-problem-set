var kthSmallest = function(root, k) {
    let i = 0;
    let stack = [];
    let curr = root;

    while (curr !== null || stack.length > 0) {
        while (curr !== null) {
            stack.push(curr);
            curr = curr.left;
        }

        curr = stack.pop();
        i++;

        if (i === k) {
            return curr.val;
        }
        curr = curr.right;
    }
};