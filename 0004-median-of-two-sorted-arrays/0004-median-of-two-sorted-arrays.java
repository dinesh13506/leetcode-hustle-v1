class Solution {
    public double findMedianSortedArrays(int[] nums1, int[] nums2) {
        int m = nums1.length, n = nums2.length;
        int x = m + n;
        int[] nums = new int[m+n];
        int i = 0, j = 0;
        int k = 0;
        while(i < m && j < n) {
            if(nums1[i] < nums2[j]) {
                nums[k] = nums1[i];
                i++;
            } else {
                nums[k] = nums2[j];
                j++;
            }
            k++;
        }
        while(i < m) {
           nums[k] = nums1[i];
           i++;
           k++;
        }
        while(j < n) {
            nums[k] = nums2[j];
            j++;
            k++;
        }
        
        if(x % 2 == 0 ) {
            int a = nums[ (x / 2)];
            int b = nums[ (x / 2) - 1];
            return (double) ((double) a + b) / 2;
        } else {
            return (double) nums[ (x / 2)];
        }
        
    }
}