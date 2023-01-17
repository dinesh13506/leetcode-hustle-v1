class Solution {
    public int minFlipsMonoIncr(String s) {
        int n = s.length();
        int left1   = 0;
        int right0  = 0;
        for(char ch : s.toCharArray()) {
            if(ch == '0') right0++;
        }
        int ans = right0; //full right window
        for(int i = 0; i < n; i++) {
            char ch = s.charAt(i);
            if(ch == '0') {
                right0--;
            }
            else {
                left1++;
            }
            ans = Math.min(ans, left1 + right0);
        }
        return ans;
    }
}