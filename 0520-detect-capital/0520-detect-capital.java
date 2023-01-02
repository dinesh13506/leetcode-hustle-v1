class Solution {
    public boolean isCapital(char ch) {
        return (ch >= 'A' && ch <= 'Z') ? true : false;
    }
    public boolean isNonCapital(char ch) {
        return (ch >= 'a' && ch <= 'z') ? true : false;
    }
    public boolean detectCapitalUse(String word) {
        int capitals = 0;
        int non_capitals = 0;
        final int n = word.length();
        for(int i = 0; i < n; i++) {
            char ch = word.charAt(i);
            if(isNonCapital(ch)) {
                non_capitals++;
            } else if(isCapital(ch)) {
                capitals++;
            }
        }
        if(capitals == n) return true;
        else if(non_capitals == n) return true;
        else if(capitals == 1 && (non_capitals + capitals) == n && isCapital(word.charAt(0))) return true;
        
        return false;
    }
}