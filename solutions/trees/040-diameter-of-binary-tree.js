var diameterOfBinaryTree = function(root) {
    
    var maxDiameter = [0];

    function dfs(root, maxDiameter) {
        if (root === null) return 0;
        let left = dfs(root.left, maxDiameter);
        let right = dfs(root.right, maxDiameter);
        maxDiameter[0] = Math.max(maxDiameter, left + right)
        return Math.max(left, right) + 1;
    }

    dfs(root, maxDiameter);
    return maxDiameter[0];
};