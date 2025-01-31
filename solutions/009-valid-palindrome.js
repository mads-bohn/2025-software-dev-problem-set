var isPalindrome = function(s) {

    s = s.toLowerCase().replace(/[^0-9a-z]/gi, '');
    
    for (let i=0, j=s.length-1; i<=j; i++, j--) {
        if (s.charAt(i) !== s.charAt(j)) {
            return false;
        }
    }
    return true;

};