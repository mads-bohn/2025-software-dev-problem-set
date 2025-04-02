// intuitive approach
var isSameTree = function(p, q) {

    function dfs(root, nodes) {
        if (root === null) {
            nodes.push(null);
            return null;
        }
        nodes.push(root.val);
        const left = dfs(root.left, nodes);
        const right = dfs(root.right, nodes);
        return nodes;
    }

    const pNodes = dfs(p, []) || [];
    const qNodes = dfs(q, []) || [];

    if (pNodes.length !== qNodes.length) return false;

    for (let i=0; i<pNodes.length; i++) {
        if (pNodes[i] !== qNodes[i]) return false;
    }

    return true;
};

// optimized approach
var isSameTree = function(p, q) {

    if (!p && !q) return true;

    if (p && q && p.val === q.val) {
        return (
            isSameTree(p.left, q.left) &&
            isSameTree(p.right, q.right)
        );
    } else return false;
};