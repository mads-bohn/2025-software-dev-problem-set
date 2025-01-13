var topKFrequent = function(nums, k) {
    const freq = {};

    for (const num of nums) {
        if (!freq[num]) {
            freq[num] = 0;
        }
        freq[num]++;
    }

    const arr = Object.entries(freq).map(([num, count]) => [count, parseInt(num)]);
    arr.sort((a, b) => b[0] - a[0]);

    return arr.slice(0,k).map(set => set[1]);
};