class Solution {
    public boolean canEat(int[] piles, int speed, int h) {
        int timetaken = 0;
        for(int pile : piles) {
            timetaken  +=  Math.ceil((double) pile/speed);
        }
        return timetaken <=  h ? true : false;
    }
    public int minEatingSpeed(int[] piles, int h) {
        int max = 1;;
        int min = 1;
        int n = piles.length;
        for(int i = 0; i < n; i++) {
            max  = Math.max(max,piles[i]);
        }
        //System.out.println("min = " + min + " max = " + max);
        int ans = max;
        int start = min, end = max;
        while(start <= end) {
            int mid = (start + end) / 2;
            //System.out.println("start = " + start + " end = " + end);
            if(canEat(piles,mid, h)) {
                //System.out.println("mid = " + mid);
                ans = ans > mid ? mid : ans;
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        }
        return ans;
    }
}