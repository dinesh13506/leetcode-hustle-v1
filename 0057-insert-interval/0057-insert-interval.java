class Solution {
            public int[][] insert(int[][] intervals, int[] newInterval) {
        PriorityQueue<int[]> pq = new PriorityQueue<>((a,b) -> {
            if(a[0] == b[0]) {
                return a[1] - b[1];
            }
            return a[1] - b[1];
        });
        for(int[] interval : intervals) {
            pq.add(interval);
        }
        pq.add(newInterval);
        Stack<int[]> stack = new Stack<>();
        while(pq.isEmpty() == false) {
            int[] curr = pq.poll();
            if(stack.isEmpty()) {
                stack.push(curr);
                continue;
            }
            int[] top = stack.peek();
            int[] newInt = new int[2];
            if(top[1] >= curr[0]){
                while(stack.isEmpty() == false && top[1] >= curr[0]) {
                    newInt[0] = Math.min(top[0], curr[0]);
                    newInt[1] = Math.max(top[1], curr[1]);
                    stack.pop();
                    top = stack.isEmpty() ? null : stack.peek();
                    curr = newInt;
                }
                stack.push(curr);
            } else {
                stack.push(curr);
            }
        }
        int[][] ans = new int[stack.size()][2];
        int i = stack.size() - 1;
        while(stack.isEmpty()==false) {
            ans[i] = stack.pop();
            i--;
        }
        return ans;

    }
}