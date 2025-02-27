var searchMatrix = function(matrix, target) {

    let vals = [];
    for (let i = 0; i<matrix.length; i++) {
        vals = vals.concat(matrix[i]);
    }

    let left = 0;
    let right = vals.length - 1;

    while (left <= right) {
        const mid = Math.floor((right + left) / 2);
        if (vals[mid] < target) {
            left = mid + 1;
        } else if (vals[mid] > target) {
            right = mid - 1;
        } else {return true}
    }
         
    return false;
};