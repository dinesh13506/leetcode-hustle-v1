class Solution {
    public void wiggleSort(int[] nums) {
        int n = nums.length;
        for(int i = 0; i < n; i++) {
            if(i % 2 == 0) {
                if(i + 1 < n) {
                    if(nums[i] > nums[i+1]) {
                        int temp = nums[i +1];
                        nums[i+1] = nums[i];
                        nums[i] = temp;
                    }
                }
            } else {
                if(i + 1 < n) {
                    if(nums[i] < nums[i+1]) {
                        int temp = nums[i +1];
                        nums[i+1] = nums[i];
                        nums[i] = temp;
                    }
                }
            }
        }
    }
}