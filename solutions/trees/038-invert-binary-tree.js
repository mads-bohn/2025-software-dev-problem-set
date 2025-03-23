var invertTree = function(root) {
    
    if (root === null) return null;

    const node = new TreeNode(root.val);
    
    node.left = invertTree(root.right);
    node.right = invertTree(root.left);

    return node;   
};