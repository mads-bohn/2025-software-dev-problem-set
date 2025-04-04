var levelOrder = function(root) {

    const res = [];
    const queue = [];

    queue.push(root);

    while (queue.length > 0) {
        let level = [];
        let iterations = queue.length;

        for (let i=0; i<iterations; i++) {
            let node = queue.shift();
            if (node !== null) {
                level.push(node.val);
                queue.push(node.left);
                queue.push(node.right);
            }
        }
        if (level.length > 0){
            res.push(level);
        }
    }

    return res;
};