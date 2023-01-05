class Solution {
    public int findMinArrowShots(int[][] points) {
        if(points.length == 0) return 0;
        Arrays.sort(points, (a,b) -> {
            if(a[1] == b[1]) return 0;
            if(a[1] < b[1]) return -1;
            return 1;
        });
        
        int lastEnd = points[0][1];
        int arrows = 1;
        for(int i = 1; i < points.length; i++) {
            int currStart = points[i][0];
            int currEnd = points[i][1];
            if(currStart > lastEnd) {
                arrows++;
                lastEnd = currEnd;
            }
        }
        return arrows;
        
    }
}