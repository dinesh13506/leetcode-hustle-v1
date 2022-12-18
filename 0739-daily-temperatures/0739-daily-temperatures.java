class Solution {
    public int[] dailyTemperatures(int[] temperatures) {
        final int n = temperatures.length;
        int[] ans = new int[n];
        Stack<Integer> stack = new Stack<Integer>();
        for(int i = 0; i < n; i++) {
            if(stack.isEmpty()) {
                stack.push(i);
                continue;
            } else {
                while(!stack.isEmpty() && temperatures[i] >temperatures[stack.peek()]) {
                    int j = stack.pop();
                    ans[j] = i - j;
                }
                stack.push(i);
            }
        }
        return ans;
    }
}