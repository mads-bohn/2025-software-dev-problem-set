var maxDepth = function(root) {

    if (root === null) {
        return 0;
    }
    
    let rDepth = maxDepth(root.right);
    let lDepth = maxDepth(root.left);

    return Math.max(rDepth, lDepth) + 1;
};