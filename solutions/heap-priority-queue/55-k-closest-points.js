var kClosest = function(points, k) {
    const maxHeap = new MaxPriorityQueue((arr) => arr[0]);
    
    for (let [x, y] of points) {
        const dist = Math.sqrt(x ** 2 + y ** 2);
        maxHeap.push([dist, x, y]);
        if (maxHeap.size() > k) {
            maxHeap.pop();
        }
    }
    
    let res = [];
    for (let i = 0; i < k; i++) {
        let temp = maxHeap.pop();
        res.push([temp[1], temp[2]]);
    }
    return res;
};