var threeSum = function(nums) {
    let ans = [];
    nums.sort(function(a, b){return a - b});
    
    for (let i=0; i<nums.length; i++) {
        if (nums[i] > 0) break;
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let j = i+1
        let k = nums.length-1
        while (j<k) {
            let sum = nums[i] + nums[j] + nums[k];
            if (sum > 0) {
                k--;
            } else if (sum < 0) {
                j++;
            } else {
                ans.push([nums[i], nums[j], nums[k]]);
                j++;
                k--;
                while (j < k && nums[j] == nums[j - 1]) {
                    j++;
                }
            }
        }
    }
        
    return ans;
};