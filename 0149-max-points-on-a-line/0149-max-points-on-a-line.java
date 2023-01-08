class Solution {
    public double calculateSlope(int[] p1, int[] p2) {
        int x1 = p1[0], x2 = p2[0];
        if(x1 == x2) return Double.MAX_VALUE;
        int y1 = p1[1], y2 = p2[1];
        if(y1 == y2) return 0;
        return (double) (y2 - y1) / (double) (x2 - x1);
    }
    public int maxPoints(int[][] points) {
        int n = points.length;
        if(n <= 1) return n;
        int ans = 1;
        for(int i = 0; i < n; i++) {
            HashMap<Double, Integer> slopeCount = new HashMap<>();
            for(int j = i + 1; j < n; j++) {
                double slop = calculateSlope(points[i], points[j]);
                slopeCount.put(slop, slopeCount.getOrDefault(slop, 0) + 1);
                ans = Math.max(slopeCount.get(slop), ans);
            }
        }
        return ans + 1;
    }
}