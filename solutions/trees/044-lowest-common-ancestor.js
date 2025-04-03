var lowestCommonAncestor = function(root, p, q) {
    if (!root) return null;

    if (root.val < Math.min(p.val, q.val)) {
        return lowestCommonAncestor(root.right, p, q);
    } else if (root.val > Math.max(p.val, q.val)){
        return lowestCommonAncestor(root.left, p, q);
    } else return root;
};