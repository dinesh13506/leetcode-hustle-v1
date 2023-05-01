class Solution {
    public double average(int[] salary) {
        int n = salary.length;
        double avg = 0;
        int max = Integer.MIN_VALUE;
        int min = Integer.MAX_VALUE;
        
        int sum = 0;
        for(int i = 0; i < salary.length; i++) {
            max = Math.max(max, salary[i]);
            min = Math.min(min, salary[i]);
            sum += salary[i];
        }
        
        sum -= max;
        sum -= min;
        
        return (double) sum / (salary.length -2);
    }
}