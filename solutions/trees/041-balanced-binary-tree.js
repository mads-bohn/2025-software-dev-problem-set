var isBalanced = function(root) {

    var isCurrentlyBalanced = true;
    
    function dfs(root) {
        if (root === null) return 0;
        
        const left = dfs(root.left);
        const right = dfs(root.right);

        if (Math.abs(left - right) > 1) {
            isCurrentlyBalanced = false;
        }       
        return Math.max(left, right) + 1;
    }

    dfs(root);   
    return isCurrentlyBalanced;  
};