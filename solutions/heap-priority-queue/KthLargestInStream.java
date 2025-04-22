import java.util.PriorityQueue;

class KthLargestInStream {

    private PriorityQueue<Integer> minHeap;
    private int k;

    public KthLargestInStream(int k, int[] nums) {
        this.k = k;
        this.minHeap = new PriorityQueue<>();
        for (int num : nums) {
            minHeap.add(num);
            if (minHeap.size() > k) {
                minHeap.poll();
            }
        }
    }
    
    public int add(int val) {
        minHeap.add(val);
        if (minHeap.size() > k) {
                minHeap.poll();
            }
        return minHeap.peek();
    }
}