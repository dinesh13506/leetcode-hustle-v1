class Solution {
    public int climbStairs(int n) {
        int a = 1;
        
        int b = 2;
        for(int i = 3; i <= n; i++) {
            int sum = a + b;
            a = b;
            b = sum;
        }
        return n == 1 ? a : b;
    }
}