class Solution {
    public int connectSticks(int[] sticks) {
        PriorityQueue<Integer> pq = new PriorityQueue<Integer>((a,b) -> {
            return a - b;
        });
        final int n = sticks.length;
        for(int i = 0; i < n; i++) {
            pq.add(sticks[i]);
        }
        int cost = 0;
        while(pq.size() > 1) {
            int x = pq.poll();
            int y = pq.poll();
            cost += x;
            cost += y;
            pq.add(x+y);
        }
        return cost;
    }
}