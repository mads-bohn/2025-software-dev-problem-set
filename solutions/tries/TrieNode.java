import java.util.HashMap;


public class TrieNode {
    HashMap<Character, TrieNode> children = new HashMap<>();
    boolean endOfWord = false;
}

class WordDictionary {

    private TrieNode root;

    public WordDictionary() {
        this.root = new TrieNode();
    }
    
    public void addWord(String word) {
        TrieNode cur = root;
        for (char c : word.toCharArray()) {
            cur.children.putIfAbsent(c, new TrieNode());
            cur = cur.children.get(c);
        }
        cur.endOfWord = true;
    }
    
    public boolean search(String word) {
        if (word == null) return true;
        return dfs(word, 0, root);
    }

    private boolean dfs(String word, int iterator, TrieNode root) {
        TrieNode cur = root;

        for (int i = iterator; i<word.length(); i++) {
            char c = word.charAt(i);
            if (c == '.') {
                for (TrieNode child : cur.children.values()) {
                    if (child != null && dfs(word, iterator + 1, child)) {
                        return true;
                    }
                }
                return false;
            } else if (!cur.children.containsKey(c)) return false;
            cur = cur.children.get(c);
        }
        return cur.endOfWord;
    }
} 