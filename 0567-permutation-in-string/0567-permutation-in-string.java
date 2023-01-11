class Solution {
    
    public boolean check(int[] count1, int[] count2) {
        for(int i = 0; i < 26; i++) {
            if(count1[i] != count2[i]) return false;
        }
        return true;
    }
    public boolean checkInclusion(String s1, String s2) {
        int n1 = s1.length();
        int n2 = s2.length();
        if(n2 < n1) return false;
        int[] count1 = new int[26];
        int[] count2 = new int[26];
        for(int i = 0; i < n1; i++) {
            char ch = s1.charAt(i);
            count1[ch - 'a']++;
        }
        
        for(int i = 0; i < n2; i++) {
            char ch = s2.charAt(i);
            count2[ch - 'a']++;
            if(i >= n1 ) count2[s2.charAt(i-n1) - 'a']--;
            if(check(count1, count2)) return true;
        }
        return false;
        
    }
}