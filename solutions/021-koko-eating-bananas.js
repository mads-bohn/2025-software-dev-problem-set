var minEatingSpeed = function(piles, h) {
    let left = 0;
    let right = Math.max(...piles);
    let res = right;

    while (left <= right) {
        const k = Math.floor((right + left)/2);

        let time = 0;
        for (const pile of piles) {
            time += Math.ceil(pile/k)
        }
        
        if (time <= h) {
            res = k;
            right = k - 1;
        } else {
            left = k + 1;
        }
    }

    return res;
};