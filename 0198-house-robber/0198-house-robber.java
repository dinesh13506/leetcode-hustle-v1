class Solution {
    public int rob(int[] nums) {
        final int n = nums.length;
        int[] dp = new int[n];
        dp[0] = nums[0];

        for(int i = 1; i < n; i++) {
            dp[i] = Math.max(nums[i] + ( i>= 2 ?  dp[i-2] : 0), dp[i-1]);
        }
        return dp[n-1];
    }
}