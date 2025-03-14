var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }

   let count = new Map();
   
    for (let char of s) {
        count.set(char, (count.get(char) || 0) + 1);
    }

    for (let char of t) {
        count.set(char, (count.get(char) || 0) - 1);
    }

    for (let num of count.values()) {
        if (num !== 0) {
            return false;
        }
    }
    return true;
};