var twoSum = function(nums, target) {
    let map = new Map();
    
    for (let i=0; i<nums.length; i++) {
        const num = nums[i];
        if (map.has(target - num)) {
            return [i, map.get(target-num)];
        }
        map.set(num, i);
    }
};