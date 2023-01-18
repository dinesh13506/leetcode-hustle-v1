class Solution {
    public int maxSubarraySumCircular(int[] nums) {
        int n = nums.length;
        
        //if all numbers are negative then maximum of all will be ansswer
        boolean isAllNegative = true;
        int max = Integer.MIN_VALUE;
        for(int num : nums) {
            max = Math.max(max, num);
            if(num > 0)  {
                isAllNegative = false;
                break;
            }
        }
        if(isAllNegative) return max;
        
        //some numbers are +ve and some are -ve, find subarray of max sum
        max = Integer.MIN_VALUE;
        int sum = 0;
        int total = 0;
        for(int num : nums) {
            sum += num;
            max = Math.max(max, sum);
            total += num;
            if(sum < 0) {
                sum = 0;
            }
        }
        
        //find subarray with min sum
        int min = Integer.MAX_VALUE;
        sum = 0;
        for(int num : nums) {
            sum += num;
            min = Math.min(min, sum);
            if(sum > 0) {
                sum = 0;
            }
        }
        
        //System.out.println(max + " " + min + " " + total);
        return Math.max(max, total - min);
        
    }
}