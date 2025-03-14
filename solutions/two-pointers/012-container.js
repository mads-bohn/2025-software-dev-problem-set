var maxArea = function(height) {
    let ans = 0;
    let i = 0;
    let j = height.length-1;
    
    while (i <  j) {
        let vol = Math.min(height[i], height[j]) * (j-i);
        ans = Math.max(vol, ans);
        if (height[i] <= height[j]) {
            i++;
        } else  {
            j--;
        }
    }
    
    return ans;  
};