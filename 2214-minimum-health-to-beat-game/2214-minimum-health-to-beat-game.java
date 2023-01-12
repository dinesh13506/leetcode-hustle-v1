class Solution {
    public long minimumHealth(int[] damage, int armor) {
        int index = -1;
        int max = Integer.MIN_VALUE;
        
        for(int i = 0; i < damage.length; i++) {
            if(damage[i] > max) {
                max = damage[i];
                index = i;
            }
        }
        long sum = 1;
        for(int i = 0; i < damage.length; i++) {
            if(i != index) {
                sum += (long) damage[i];
            } else {
                if(damage[i] - armor > 0) {
                    sum += (long) damage[i] - armor;
                }
            }
        }
        
        //System.out.println(index + " " + max);
        return sum;
    }
}

