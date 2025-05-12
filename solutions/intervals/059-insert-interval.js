var insert = function(intervals, newInterval) {
    const res = [];

    for (const interval of intervals) {
        if (newInterval == null || newInterval[0] > interval[1]) {
            res.push(interval);
        } else if (newInterval[1] < interval[0]) {
            res.push(newInterval);
            res.push(interval);
            newInterval = null;
        } else  {
            let start = Math.min(newInterval[0], interval[0]);
            let end = Math.max(newInterval[1], interval[1]);
            newInterval = [start, end]
        }
    }
    
    if (newInterval !== null) {
        res.push(newInterval);
    }
    return res;
};