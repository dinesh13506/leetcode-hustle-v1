/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    
    const n = nums.length;
    
    let dp = new Array(n);
    
    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1]);
    
    for(let i = 2; i < n; i++) {
        dp[i] = Math.max(nums[i] + dp[i-2], dp[i-1]);
    }
    return dp[n-1];
};