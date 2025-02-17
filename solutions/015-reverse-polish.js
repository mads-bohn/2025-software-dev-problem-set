var evalRPN = function(tokens) {
    let stack = [];

    for (let op of tokens) {
         if (op === '+') {
            stack.push(stack.pop() + stack.pop());
        } else if (op === '-') {
            let a = stack.pop();
            let b = stack.pop();
            stack.push(b - a);
        } else if (op === '*') {
            stack.push(stack.pop() * stack.pop());
        } else if (op === '/') {
            stack.push(Math.trunc((1/stack.pop()) * stack.pop()));
        } else {
            stack.push(parseInt(op));
        }
    }


    return stack.pop();
};