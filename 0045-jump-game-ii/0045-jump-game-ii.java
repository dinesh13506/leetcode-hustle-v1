class Solution {
    int n;
    int[] count;
    public int dp(int i, int[] nums) {
        if(i == n-1) {
            return 0;
        }
        if(count[i] != -1) {
            return count[i];
        }
        int ans = Integer.MAX_VALUE;
        for(int j = 1; j <= nums[i]; j++) {
            int jumps = dp( Math.min(i + j,  n-1), nums);
            if(jumps != Integer.MAX_VALUE) {
                ans = Math.min(ans, 1 + jumps);
            } 
        }
        count[i] = ans;
        return ans;
    }
    
    public int jump(int[] nums) {
        n = nums.length;
        count = new int[n];
        Arrays.fill(count, -1);
        return dp(0, nums);
    }
}