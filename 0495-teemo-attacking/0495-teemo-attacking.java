class Solution {
    public int findPoisonedDuration(int[] timeSeries, int duration) {
        int ans = 0;
        int start = 0;
        int end = 0;
        
        start = timeSeries[0];
        end = start + duration - 1;
        
        for(int i = 1; i < timeSeries.length; i++) {
            if(timeSeries[i] <= end) {
                ans = ans + (timeSeries[i] - start);
                start = timeSeries[i];
                end = start + duration - 1;
            } else {
                ans = ans + (end - start) + 1;
                start = timeSeries[i];
                end = start + duration - 1;
            }
        }
        ans = ans + (end - start) + 1;
        return ans;
        
    }
}