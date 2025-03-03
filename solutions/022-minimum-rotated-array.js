var findMin = function(nums) {
    let left = 0;
    let right = nums.length-1;

    while (left <= right) {
        const mid = Math.floor((left+right)/2);
        if (nums[mid] > nums[mid+1]) {
            return nums[mid+1];
        } else if (nums[mid] < nums[mid-1]) {
            return nums[mid];
        } else if (nums[left] < nums[mid]) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return nums[0];
};