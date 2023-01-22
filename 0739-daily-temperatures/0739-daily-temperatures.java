class Solution {
    public int[] dailyTemperatures(int[] temperatures) {
        Stack<Integer> stack = new Stack<Integer>();
        int n = temperatures.length;
        int[] ans  = new int [n];
        for(int i = 0; i < n; i++) {
            if(stack.isEmpty()) {
                stack.push(i);
            } else {
                while(stack.isEmpty() == false && temperatures[stack.peek()] < temperatures[i]) {
                    //System.out.println(temperatures[stack.peek()] + " is warmed by " + temperatures[i]);
                    ans[stack.peek()] = i - stack.peek();
                    stack.pop();
                }
                stack.push(i);
            }
        }
        return ans;
        
    }
}