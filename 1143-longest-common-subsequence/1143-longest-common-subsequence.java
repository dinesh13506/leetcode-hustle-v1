class Solution {
    
    int[][] memo;
    
    public int lcs(int i, String text1,int m, int j, String text2, int n) {
        if(i>= m || j >= n) {
            return 0;
        }
        if(memo[i][j] != Integer.MAX_VALUE) {
            return memo[i][j];
        }
        char ch1 = text1.charAt(i);
        char ch2 = text2.charAt(j);
        if(ch1 == ch2) {
            memo[i][j] =  1 + lcs(i + 1, text1, m, j + 1, text2, n);
        } else {
            int ans1 = lcs(i + 1, text1, m, j, text2, n);
            int ans2 = lcs(i, text1, m, j + 1, text2, n);
            memo[i][j] =  Math.max(ans1, ans2);
        }
        return memo[i][j];
    }
    
    public int longestCommonSubsequence(String text1, String text2) {
        int m = text1.length();
        int n = text2.length();
        memo = new int[m][n];
        for(int i = 0; i < m; i++) {
            for(int j = 0; j < n; j++) {
                memo[i][j] = Integer.MAX_VALUE;
            }
        }
        return lcs(0, text1, m, 0, text2, n);
    }
}