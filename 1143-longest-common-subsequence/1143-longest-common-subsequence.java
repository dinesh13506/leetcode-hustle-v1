class Solution {
    private int m, n;
    public int longestCommonSubsequence(String text1, String text2) {
        m = text1.length();
        n = text2.length();
        int[] prev = new int[n+1];
        for(int i = 1; i <= m; i++) {
            int[] curr = new int[n+1];
            for(int j = 1; j <= n; j++) {
                char ch1 = text1.charAt(i-1);
                char ch2 = text2.charAt(j-1);
                if(ch1 == ch2) {
                   curr[j] = 1 + prev[j-1];
                } else {
                   curr[j] = Math.max(prev[j], curr[j-1]);
                }
            }
            prev = curr;
        }
        return prev[n];
    }
}