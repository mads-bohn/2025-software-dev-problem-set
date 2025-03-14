var isValid = function(s) {
    const stack = [];
        const matches = {
            ')': '(',
            ']': '[',
            '}': '{'
        };

        for (let char of s) {
            if (matches[char]) {
                if (stack.length > 0 && stack[stack.length - 1] === matches[char]) {
                    stack.pop();
                } else {
                    return false;
                }
            } else {
                stack.push(char);
            }
        }
        return stack.length === 0;

};