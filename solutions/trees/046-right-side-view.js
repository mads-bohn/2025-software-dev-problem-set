var rightSideView = function(root) {
    const res = [];
    const q = [];
    
    q.push(root);

    while (q.length > 0) {
        let level = [];
        let length = q.length;

        for (let i=0; i<length; i++) {
            let node = q.shift();
            if (node) {
                level.push(node.val);
                q.push(node.left);
                q.push(node.right);
            }
        }
            
        if (level.length > 0) {
            res.push(level[level.length-1]);
        }
    }
        
    return res;
};