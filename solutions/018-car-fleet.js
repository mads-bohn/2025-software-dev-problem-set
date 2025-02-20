var carFleet = function(target, position, speed) {
    const stack = [];
    let fleets = position.length;

    let pair = position.map((p, i) => [p, speed[i]]);
    pair.sort((a, b) => b[0] - a[0]);

    for (let i=0; i<pair.length; i++) {
        const time = (target - pair[i][0]) / pair[i][1];
        if (stack.length === 0 || time > (target - stack[stack.length-1][0]) / stack[stack.length-1][1]) {
            stack.push([pair[i][0], pair[i][1]]);
        } else {
            fleets--;
        }
    }

    return fleets;
};