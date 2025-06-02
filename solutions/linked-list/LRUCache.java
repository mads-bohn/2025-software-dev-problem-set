import java.util.HashMap;
import java.util.LinkedList;
import java.util.Map;

class LRUCache {

    private Map<Integer, Integer> cache;
    private LinkedList<Integer> recent;
    private int capacity;

    public LRUCache(int capacity) {
        this.cache = new HashMap<>();
        this.recent = new LinkedList<>();
        this.capacity = capacity;
    }
    
    public int get(int key) {
        if (cache.containsKey(key)) {
            recent.removeIf(n -> n == key);
            recent.addLast(key);
            return cache.get(key);
        } else {
            return -1;
        }
    }
    
    public void put(int key, int value) {
        if (cache.containsKey(key)) {
            cache.replace(key, value);
        } else if (cache.size() >= capacity) {
            int LRUKey = recent.getFirst();
            recent.removeIf(n -> n == LRUKey);
            cache.remove(LRUKey);
        }
        cache.putIfAbsent(key, value);
        recent.addLast(key);
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * LRUCache obj = new LRUCache(capacity);
 * int param_1 = obj.get(key);
 * obj.put(key,value);
 */