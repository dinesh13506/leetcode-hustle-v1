class Solution {
    public boolean detectCapitalUse(String word) {
        int capitals = 0;
        int non_capitals = 0;
        final int n = word.length();
        for(int i = 0; i < n; i++) {
            char ch = word.charAt(i);
            if(ch >= 'a' && ch <= 'z') {
                non_capitals++;
            } else if(ch >= 'A' && ch <= 'Z') {
                capitals++;
            }
        }
        if(capitals == n) return true;
        else if(non_capitals == n) return true;
        else if(capitals == 1 && (non_capitals + capitals) == n && word.charAt(0) >= 'A' && word.charAt(0) <= 'Z') return true;
        
        return false;
    }
}