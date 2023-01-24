class Solution {
    public int carFleet(int target, int[] position, int[] speed) {
        int n = position.length;
        int[][] input = new int[n][2];
        for(int i = 0; i < n; i++) {
            input[i] = new int[2];
            input[i][0] = speed[i];
            input[i][1] = position[i];
        }
        
        Arrays.sort(input, (a,b) -> {
            return a[1] - b[1];
        });
        
        Stack<Double> stack = new Stack<Double>();
        for(int i = n - 1; i >= 0; i--) {
            int s = input[i][0], d = target - input[i][1];
            //System.out.println(s + " " + input[i][1]);
            double t = (double) d / s;
            //stack.push(t);
            if(stack.size() > 0 && t <= stack.peek()) {
                continue;
            } else {
                stack.push(t);
            }
            
        }
        return stack.size();
    }
}