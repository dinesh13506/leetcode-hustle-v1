class Solution {
    public int characterReplacement(String s, int k) {
        int ans = 0;
        int n = s.length();
        int left = 0;
        int[] freq = new int[26];
        for(int right = 0; right < n; right++) {
            freq[s.charAt(right) - 'A']++;
            int maxFreq = getMaxFreq(freq);
            while( (right - left + 1) - maxFreq  > k) {
                freq[s.charAt(left) - 'A']--;
                left++;
            }
            ans = (right - left + 1) > ans ? (right - left + 1) : ans;
        }
        return ans;
    }

    private int getMaxFreq(int[] freq) {
        int max = 0;
        for(int i = 0; i < 26; i++) {
            max = freq[i] > max ? freq[i] : max;
        }
        return max;
    }
}