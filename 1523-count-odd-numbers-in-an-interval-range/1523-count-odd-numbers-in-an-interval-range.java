class Solution {
    public int countOdds(int low, int high) {
        
        //both are odd
        //1,9 -> 2, 4, 6, 8
        int total = (high - low) + 1;
        if(low % 2 == 0) low++;
        if(high % 2 == 0) high--;
        int count1 = low - (low) / 2;
        if(low % 2 != 0) count1++;
        int count2 = high - (high/2);
        if(high % 2 != 0) count2++;
        
        int ans = count2 - count1 + 1;
        return ans > 0 ? ans : 0;
    }
}