class Solution {
    int n;
    HashMap<Integer, Integer> map;
    public int dp(int i, int[] nums) {
        if(i == n-1) {
            return 0;
        }
        if(map.containsKey(i)) {
            return map.get(i);
        }
        int ans = Integer.MAX_VALUE;
        for(int j = 1; j <= nums[i]; j++) {
            int jumps = dp( Math.min(i + j,  n-1), nums);
            if(jumps != Integer.MAX_VALUE) {
                ans = Math.min(ans, 1 + jumps);
            } 
        }
        map.put(i, ans);
        return ans;
    }
    
    public int jump(int[] nums) {
        map = new HashMap<>();
        n = nums.length;
        return dp(0, nums);
    }
}