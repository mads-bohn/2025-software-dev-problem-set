var eraseOverlapIntervals = function(intervals) {

    intervals.sort((a, b) => a[0] - b[0]);
    let removed = 0;
    let prevEnd = intervals[0][1];

    for (let i=1; i<intervals.length; i++) {
        if (intervals[i][0] < prevEnd) {
            removed++;
            prevEnd = Math.min(intervals[i][1], prevEnd);
        } else {
            prevEnd = intervals[i][1];
        }
    }
        
    return removed;
};