var dailyTemperatures = function(temperatures) {
    const answer = new Array(temperatures.length).fill(0);
    const stack = []; // [temp, index]

    for (let i=0; i<temperatures.length; i++) {
        const t = temperatures[i];
        while (stack.length > 0 && t > stack[stack.length-1][0]) {
            const [stackTemp, stackI] = stack.pop();
            answer[stackI] = (i-stackI)
        }
        stack.push([t, i]);
    }     

    return answer;
};