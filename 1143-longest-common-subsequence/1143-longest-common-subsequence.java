class Solution {
    private int[][] memo;
    private int m, n;
    
    public int longestCommonSubsequence(String text1, String text2) {
        m = text1.length();
        n = text2.length();
        memo = new int[m+1][n+1];
        for(int i = 1; i <= m; i++) {
            for(int j = 1; j <= n; j++) {
                char ch1 = text1.charAt(i-1);
                char ch2 = text2.charAt(j-1);
                if(ch1 == ch2) {
                    memo[i][j] = 1 + memo[i-1][j-1];
                } else {
                    memo[i][j] = Math.max(memo[i-1][j], memo[i][j-1]);
                }
            }
        }
        return memo[m][n];
    }
}