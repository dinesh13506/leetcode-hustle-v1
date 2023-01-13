class Solution {
     public int trap(int[] height) {
        int n = height.length;
        int[] maxLeft = new int[n];
        int[] maxRight = new int[n];
        int waterTrapped = 0;
        for(int i = 1; i < n; i++) {
            maxLeft[i] = Math.max(maxLeft[i-1], height[i-1]);
        }
        for(int j = n-2; j >= 0; j--) {
            maxRight[j] = Math.max(maxRight[j + 1], height[j + 1]);
        }

        for(int i = 0; i < n; i++) {
            int min = Math.min(maxLeft[i], maxRight[i]);
            if(min - height[i] > 0) {
                waterTrapped += min - height[i];
            }
        }
        return waterTrapped;
    }
}