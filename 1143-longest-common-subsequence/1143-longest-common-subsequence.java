class Solution {
    private int[][] memo;
    private int m, n;
    public int lcs(int i, String text1, int j, String text2) {
        if(i < 0 || j < 0) {
            return 0;
        }
        if(memo[i][j] != Integer.MAX_VALUE) {
            return memo[i][j];
        }
        char ch1 = text1.charAt(i);
        char ch2 = text2.charAt(j);
        if(ch1 == ch2) {
            memo[i][j] =  1 + lcs(i - 1, text1, j - 1, text2);
        } else {
            int ans1 = lcs(i - 1, text1, j, text2);
            int ans2 = lcs(i, text1, j - 1, text2);
            memo[i][j] =  Math.max(ans1, ans2);
        }
        return memo[i][j];
    }
    
    public int longestCommonSubsequence(String text1, String text2) {
        m = text1.length();
        n = text2.length();
        memo = new int[m][n];
        for(int i = 0; i < m; i++) {
            for(int j = 0; j < n; j++) {
                memo[i][j] = Integer.MAX_VALUE;
            }
        }
        return lcs(m-1, text1, n-1, text2);
    }
}