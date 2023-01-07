class Solution {
    public boolean isPalindrome(String s) {
        s = s.toLowerCase();
        StringBuilder sb = new StringBuilder();
        int n = s.length();
        for(char ch : s.toCharArray()) {
            if( (ch >= 'a' && ch <= 'z') || (ch >= '0' && ch <= '9')) {
                sb.append(ch);
            }
        }
        String output = sb.toString();
        int p1 = 0, p2 = output.length() - 1;
        while(p1 < p2) {
            if(output.charAt(p1) != output.charAt(p2)) return false;
            p1++;
            p2--;
        }
        return true;
    }
}