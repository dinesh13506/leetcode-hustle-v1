class Solution {
    public int minStoneSum(int[] piles, int k) {
        PriorityQueue<Integer> pq = new PriorityQueue<Integer>((a,b) -> {
            return piles[b] - piles[a];
        });
        final int n = piles.length;
        int ans = 0;
        for(int i = 0; i < n; i++) {
            pq.add(i);
            ans += piles[i];
        }
        while(k > 0) {
            int index = pq.poll();
            int num = (int) Math.floor(piles[index]/2);
            piles[index] -= num;
            ans -= num;
            pq.add(index);
            k--;
        }
        return ans;
    }
}