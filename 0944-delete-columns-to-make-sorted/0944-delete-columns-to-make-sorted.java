class Solution {
    public int minDeletionSize(String[] strs) {
        int ans = 0;
        int n = strs.length;
        if(n <= 0) return 0;
        int wSize = strs[0].length();
        for(int i = 0; i < wSize; i++) {
            char prev = strs[0].charAt(i);
            for(int j = 1; j < n; j++) {
                char ch = strs[j].charAt(i);
                if(ch >= prev) {
                    prev = ch;
                    continue;
                } else {
                    ans++;
                    break;
                }
            }
        }
        return ans;
    }
}