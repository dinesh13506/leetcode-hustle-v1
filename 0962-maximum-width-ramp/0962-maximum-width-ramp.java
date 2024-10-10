class Solution {
    public  int maxWidthRamp(int[] A) {
        // Step 1: Create a decreasing stack of indices
        Stack<Integer> stack = new Stack<>();
        
        // Build the stack of indices with decreasing values
        for (int i = 0; i < A.length; i++) {
            if (stack.isEmpty() || A[stack.peek()] > A[i]) {
                stack.push(i);
            }
        }

        // Step 2: Traverse from the end and calculate the maximum width
        int maxWidth = 0;
        for (int j = A.length - 1; j >= 0; j--) {
            // Pop from the stack while A[stack.peek()] <= A[j]
            while (!stack.isEmpty() && A[stack.peek()] <= A[j]) {
                int i = stack.pop();
                maxWidth = Math.max(maxWidth, j - i);
            }
        }
        
        return maxWidth;
    }
}