class Solution {
    public long minimumSteps(String s) {
        long result = 0;
        final int n = s.length();
        int zeroes=0;
        for(int i = n - 1; i >= 0; i--) {
            if(s.charAt(i) == '1') {
                result += (long) zeroes;
            } else {
                zeroes++;
            }
        }
        return  result;
    }
}