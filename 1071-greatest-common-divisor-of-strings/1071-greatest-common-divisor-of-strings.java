class Solution {
    public String gcdOfStrings(String str1, String str2) {
        int n1 = str1.length();
        int n2 = str2.length();
        String ans = "";
        
        String temp = "";
        for(int i = 0; i < Math.min(n1, n2); i++) {
            temp += str1.charAt(i);
            if((n1 % temp.length() == 0) && (n2 % temp.length() == 0)) {
                String t1 = "";
                String t2 = "";
                while(t1.length() < n1) {
                    t1 += temp;
                }
                while(t2.length() < n2) {
                    t2 += temp;
                }
                if(t1.equals(str1) && t2.equals(str2)) {
                    ans = temp;
                }
            }
        }
        return ans;
    }
}