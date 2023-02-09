class Solution {
    
    public int bs(int[] nums, int start, int end, int target) {
        while(start <= end) {
            int mid = start + (end - start) / 2;
            if(nums[mid] == target) return mid;
            else if(target < nums[mid]) end = mid -1;
            else start = mid + 1;
        }
        return -1;
    }
    
    public int search(int[] nums, int target) {
        int min = Integer.MAX_VALUE;
        int min_idx = 0;
        for(int i = 0; i < nums.length; i++) {
            if(nums[i] < min) {
                min = nums[i];
                min_idx = i;
            }
        }
        
        if(min == target) return min_idx;
        int id1 = bs(nums, 0, min_idx - 1, target);
        int id2 = bs(nums, min_idx + 1, nums.length - 1, target);
        if(id1 == -1 && id2 == -1) return -1;
        else return id1 >= 0 ? id1 : id2;
    }
}