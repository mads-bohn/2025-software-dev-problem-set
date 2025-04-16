var buildTree = function(preorder, inorder) {
    if (!preorder.length || !inorder.length) return null;

    let root = new TreeNode(preorder[0]);
    let mid = inorder.indexOf(preorder.shift());   
    
    root.left = buildTree(preorder, inorder.slice(0, mid));
    root.right = buildTree(preorder, inorder.slice(mid+1));

    return root;
};