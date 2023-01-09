class Solution {
    public int maxProfit(int[] prices) {
        int n = prices.length;
        if(n <= 1) return 0; //cannot acheive anything
        int buy_at = prices[0];
        int ans = 0;
        for(int i = 1; i < n; i++) {
            int sell_at = prices[i];
            int profit = sell_at - buy_at;
            ans = Math.max(ans, profit);
            buy_at = Math.min(buy_at, prices[i]);
        }
        return ans;
    }
}