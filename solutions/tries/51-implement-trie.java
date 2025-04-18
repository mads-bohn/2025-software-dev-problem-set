import java.util.ArrayList;
import java.util.List;
import java.util.HashMap;

//intuition
class NotTrie {

    private List<String> words = new ArrayList<String>();

    public NotTrie() {
        
    }
    
    public void insert(String word) {
        words.add(word);
    }
    
    public boolean search(String word) {
        return words.contains(word);
    }
    
    public boolean startsWith(String prefix) {
        if (words.isEmpty()) return false;
        for (String word : words) {
            if (word.startsWith(prefix)) {
                return true;
            }
        }
        return false;
    }
}

// actually implementing trie
class TrieNode {
    HashMap<Character, TrieNode> children = new HashMap<>();
    boolean endOfWord = false;
}

class Trie {

    private TrieNode root;

    public Trie() {
        root = new TrieNode();
    }
    
    public void insert(String word) {
        TrieNode cur = root;
        for (char c : word.toCharArray()) {
            cur.children.putIfAbsent(c, new TrieNode());
            cur = cur.children.get(c);
        }
        cur.endOfWord = true;
    }
    
    public boolean search(String word) {
        TrieNode cur = root;
        for (char c : word.toCharArray()) {
            if (!cur.children.containsKey(c)) return false;
            cur = cur.children.get(c);
        }
        return cur.endOfWord;
    }
    
    public boolean startsWith(String prefix) {
        TrieNode cur = root;
        for (char c : prefix.toCharArray()) {
            if (!cur.children.containsKey(c)) return false;
            cur = cur.children.get(c);
        }
        return true;
    }
}