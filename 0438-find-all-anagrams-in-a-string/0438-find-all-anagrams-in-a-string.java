class Solution {
    public boolean isAnagram(int[] map1, int[] map2) {
        // for(int m1 : map1) {
        //     System.out.print(m1);
        // }
        for(int i = 0; i < 26; i++) {
            if(map1[i] != map2[i]) return false;
        }
        return true;
    }
    public List<Integer> findAnagrams(String s, String p) {
        List<Integer> ans = new ArrayList<>();
        int n = s.length();
        int[] pcount = new int[26];
        for(int i = 0; i < p.length(); i++) {
            char ch = p.charAt(i);
            pcount[ch - 'a']++;
        }
        int[] scount = new int[26];
        int left = 0;
        for(int right = 0; right < s.length(); right++) {
            int wsize = right - left + 1;
            scount[s.charAt(right) - 'a']++;
            if(wsize == p.length()) {
                int  index = left - 1 >= 0 ? s.charAt(left-1) - 'a' : -1;
                if(index >= 0) {
                    scount[index]--;
                }
                if(isAnagram(pcount, scount)) {
                    ans.add(left);
                }
                left++;
            }
            
        }
        return ans;
    }
}