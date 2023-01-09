class Solution {
    public int maxArea(int[] height) {
        int n = height.length;
        int ans = 0;
        if(n <= 1) return ans;
        int p1 = 0, p2 = n - 1;
        while(p1 < p2) {
            int area = (p2 - p1) * Math.min(height[p1], height[p2]);
            ans = Math.max(ans, area);
            if(height[p1] < height[p2]) p1++;
            else p2--;
        }
        return ans;
    }
}