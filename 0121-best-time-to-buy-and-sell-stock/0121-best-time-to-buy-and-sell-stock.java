class Solution {
    public int maxProfit(int[] prices) {
        int n = prices.length;
        PriorityQueue<Integer> pq = new PriorityQueue<>((a,b) -> {
            return a - b;
        });
        if(n <= 1) return 0;
        pq.add(prices[0]);
        int ans = Integer.MIN_VALUE;
        for(int i = 1; i < n; i++) {
            int sold = prices[i];
            int bought_at = pq.peek();
            ans = Math.max(ans, sold - bought_at);
            pq.add(sold);
        }
        return ans > 0 ? ans : 0;
    }
}