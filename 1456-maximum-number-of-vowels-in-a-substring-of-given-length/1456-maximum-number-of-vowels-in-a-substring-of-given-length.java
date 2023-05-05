class Solution {
    
    public boolean isVowel(char ch) {
        return ch == 'a' || ch == 'e' || ch == 'o' || ch == 'u' || ch == 'i';
    }
    
    
    public int maxVowels(String s, int k) {
       int ans = 0;
       int sum = 0;
        
        //first window
        for(int i = 0; i < k; i++) {
            char ch = s.charAt(i);
            if(isVowel(ch)) {
               sum++;
            }
        }
        
        ans = Math.max(ans, sum);
        
        for(int i = k; i < s.length(); i++) {
            char left = s.charAt(i - k);
            if(isVowel(left)) {
               sum--;
            }
            char curr = s.charAt(i);
            if(isVowel(curr)) {
               sum++;
            }
            ans = Math.max(ans, sum);
        }
        
        return ans;
    }
}