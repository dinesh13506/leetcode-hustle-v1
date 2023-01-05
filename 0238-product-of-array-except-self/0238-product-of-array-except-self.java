class Solution {
    public int[] productExceptSelf(int[] nums) {
        int p = 1;
        int zeroes = 0;
        for(int num : nums) {
            if(num == 0) zeroes++;
            else p *= num;
        }
        int[] ans = new int[nums.length];
        int i = 0;
        for(int num : nums) {
            ans[i] = (num != 0) ? (zeroes == 0 ? p/num : 0) : (zeroes == 1 ? p : 0);
            i++;
        }
        return ans;
    }
}