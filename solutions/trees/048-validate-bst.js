var isValidBST = function(root) {
    
    function isBST(node, min, max) {
        if (!node) return true;

        if (!(node.val < max && node.val > min)) {
            return false;
        }

        return isBST(node.left, min, node.val) &&
        isBST(node.right, node.val, max);
    }

    return isBST(root, -Infinity, Infinity);
};