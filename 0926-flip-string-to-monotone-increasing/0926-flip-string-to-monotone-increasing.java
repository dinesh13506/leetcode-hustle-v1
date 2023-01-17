class Solution {
    int[] prefixOne;
    public int dp(int len, String s) {
        if(len <= 0) return 0;
        char ch = s.charAt(len-1);
        if(ch == '1') {
            return dp(len-1, s);
        } else {
            return Math.min(prefixOne[len-1],1 + dp(len-1,s));
        }
    }
    
    public int minFlipsMonoIncr(String s) {
        int n = s.length();
        prefixOne = new int[n];
        int sum = 0;
        for(int i = 0; i < n; i++) {
            char ch = s.charAt(i);
            if(ch == '1') sum++;
            prefixOne[i] = sum;
        }
        return dp(n,s);
    }
}