var findKthLargest = function(nums, k) {
    const minHeap = new MinPriorityQueue();

    for (num of nums) {
        minHeap.push(num);
        if (minHeap.size() > k) {
            minHeap.pop();
        }
    }

    return minHeap.pop();
};