class Solution {
    public char findKthBit(int n, int k) {
        StringBuilder result = new StringBuilder();
        result.append('0');
        for(int i = 1; i <= n && k > result.length() ; i++) {
            StringBuilder rev = new StringBuilder();
            result.append('1');
            for(int j = result.length() - 2; j >= 0; j--) {
                char ch = result.charAt(j) == '0' ? '1' : '0';
                result.append(ch);
            }
             
            //System.out.println(result.toString());
        }

        return result.charAt(k-1);

    }
}