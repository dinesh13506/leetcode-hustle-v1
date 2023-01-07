class Solution {
    public int longestConsecutive(int[] nums) {
        Arrays.sort(nums);
        int ans = 0, n = nums.length;
        if(n <= 0 ) return 0;
        else if(n == 1) return 1;
        int max = 1;
        ans = 1;
        int prev = nums[0];
        for(int i = 1 ; i < n; i++) {
            if(prev == nums[i]) {
                continue;
            }
            if(prev + 1 == nums[i]) {
                ans++;
                max = ans > max ? ans : max;
                prev = nums[i];
            } else {
                prev = nums[i];
                ans = 1;
            }
        }
        return max;
    }
}