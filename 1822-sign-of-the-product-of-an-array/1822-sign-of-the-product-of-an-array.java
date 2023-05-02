class Solution {
    public int arraySign(int[] nums) {
        int pos = 0;
        int neg = 0;
        int z = 0;
        for(int i = 0; i < nums.length; i++) {
            if(nums[i] == 0) return 0;
            else if(nums[i] > 0) pos++;
            else neg++;
        }
        
        if(neg % 2 == 0) return 1;
        return -1;
    }
}