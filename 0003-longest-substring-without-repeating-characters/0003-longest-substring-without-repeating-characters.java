class Solution {
    public int lengthOfLongestSubstring(String s) {
        HashMap<Character, Integer> count = new HashMap<>();
        int n = s.length();
        int start = 0;
        int ans = 0;
        for(int i = 0; i < n; i++) {
            char ch = s.charAt(i);
            count.put(ch, count.getOrDefault(ch , 0) + 1);
            while(count.get(ch) > 1 && start < n) {
                char prevCh = s.charAt(start);
                count.put(prevCh, count.get(prevCh) - 1);
                start++;
            }
            int len = i - start + 1;
            ans = Math.max(len, ans);
        }
        return ans;
    }
}