class Solution {
    public String addBinary(String a, String b) {
        int carry = 0;
        StringBuilder sb = new StringBuilder("");
        int n1 = a.length();
        int n2 = b.length();
        int p1 = n1 - 1;
        int p2 = n2 - 1;
        while(p1 >= 0 && p2 >= 0 ) {
            int num1 = a.charAt(p1) - '0';
            int num2 = b.charAt(p2) - '0';
            int sum = carry + num1 + num2;
            sb.append(sum % 2);
            carry = sum / 2;
            p1--;
            p2--;
        }
        
        while(p1 >= 0) {
            int num1 = a.charAt(p1) - '0';
            int sum = carry + num1 + 0;
            sb.append(sum % 2);
            carry = sum / 2;
            p1--;
        }
        
        while(p2 >= 0) {
            int num2 = b.charAt(p2) - '0';
            int sum = carry + 0 + num2;
            sb.append(sum % 2);
            carry = sum / 2;
            p2--; 
        }
        if(carry > 0) {
            sb.append("1");
        }
        return sb.reverse().toString();
    }
}