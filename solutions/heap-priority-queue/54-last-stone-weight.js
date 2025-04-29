var lastStoneWeight = function(stones) {
    const maxHeap = MaxPriorityQueue.fromArray(stones);
    
    while (maxHeap.size() > 1) {
        const a = maxHeap.dequeue();
        const b = maxHeap.dequeue();

        if (a !== b) {
            maxHeap.enqueue(a - b);
        }
    }

    if (maxHeap.isEmpty()) {
        return 0;
    } else {
        return maxHeap.dequeue();
    }
};