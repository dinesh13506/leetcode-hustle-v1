class Solution {
    public int maxIceCream(int[] costs, int coins) {
        int n = costs.length;
        Arrays.sort(costs);
        int count = 0, i = 0;
        while(i < n && coins > 0) {
            if(costs[i] <= coins) {
                count++;
                coins -= costs[i];
            } else {
                break;
            }
            i++;
        }
        return count;
    }
}