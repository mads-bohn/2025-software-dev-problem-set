var isSubtree = function(root, subRoot) {
    
    function sameTree(root1, root2) {
        if (!root1 && !root2) return true;
        if (root1 && root2 && root1.val === root2.val) {
            return (
                sameTree(root1.left, root2.left) &&
                sameTree(root1.right, root2.right)
            );
        } else return false;
    }

    if (!subRoot) return true;
    if (!root) return false;

    if (sameTree(root, subRoot)) return true;
    return (
        isSubtree(root.left, subRoot) ||
        isSubtree(root.right, subRoot)
    )

};