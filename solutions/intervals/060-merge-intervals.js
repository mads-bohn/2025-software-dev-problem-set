var merge = function(intervals) {
    let left = 0;
    let right = 1;

    intervals.sort(function(a, b){
        return a[0] - b[0];
    });

    while (right < intervals.length) {
        if (intervals[left][1] >= intervals[right][0]) {
            const start = Math.min(intervals[left][0], intervals[right][0]);
            const end = Math.max(intervals[left][1], intervals[right][1]);
            intervals[left] = [start, end];
            intervals.splice(right, 1);
        } else {
            left++;
            right++;
        }
    }
    return intervals;
};