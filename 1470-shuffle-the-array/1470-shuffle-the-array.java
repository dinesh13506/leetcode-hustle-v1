class Solution {
    public int[] shuffle(int[] nums, int n) {
        int[] ans = new int[2*n];
        int p = 0;
        for(int i = 0; i < n; i++) {
            ans[p] = nums[i];
            p++;
            ans[p] = nums[i+n];
            p++;
        }
        return ans;
    }
}