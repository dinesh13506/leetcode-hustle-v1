class Solution {
    public int tribonacci(int n) {
        int prev = 0, curr = 1, next = 1;
        if(n == 0) return 0;
        if(n <= 2) return 1;
        for(int i = 3; i <= n; i++) {
            int sum = prev + curr + next;
            prev = curr;
            curr = next;
            next = sum;
            //System.out.println(prev + " " + curr);
        }
        return next;
    }
}