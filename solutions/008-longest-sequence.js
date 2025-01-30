var longestConsecutive = function(nums) {
    const numSet = new Set(nums);
    let maxSeq = 0;

    for (let i=0; i<nums.length; i++) {
        if (!numSet.has(nums[i]-1)) {
            let length = 1;
            while (numSet.has(nums[i] + length)) {
                length++;
            }
            maxSeq = Math.max(maxSeq, length)
        }
    }
    return maxSeq;
};