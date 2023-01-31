class Solution {
    public int findMin(int[] nums) {
        int n = nums.length;
        int start = 0, end = nums.length - 1;
        if(nums[start] <= nums[end]) return nums[start];
        while(start <= end) {
            int mid = start + (end - start) / 2;
            int left = (mid - 1 + n) % n;
            int right = (mid + 1 + n) % n;
            
            if(nums[mid] > nums[right]) {
                return nums[right];
            }
            else if(nums[mid] < nums[left]) {
                return nums[mid];
            }
            if(nums[start] <= nums[mid]) start = mid + 1;
            else if(nums[mid] <= nums[end]) end = mid - 1;
        }
        return nums[start];
    }
}