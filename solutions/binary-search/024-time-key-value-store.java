import java.util.HashMap;
import java.util.Map;
import java.util.TreeMap;

class TimeMap {

    private Map<String, TreeMap<Integer, String>> map;

    public TimeMap() {
        map = new HashMap<>();
    }
    
    public void set(String key, String value, int timestamp) {
        map.computeIfAbsent(key, k -> new TreeMap<>()).put(timestamp, value);
    }
    
    public String get(String key, int timestamp) {
        if (!map.containsKey(key)) return "";
        TreeMap<Integer, String> timestamps = map.get(key);
        Map.Entry<Integer, String> entry = timestamps.floorEntry(timestamp);
        if (entry == null) return "";
        return entry.getValue();
    }
}