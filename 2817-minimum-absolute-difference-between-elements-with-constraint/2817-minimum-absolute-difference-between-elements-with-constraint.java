class Solution {
    public int minAbsoluteDifference(List<Integer> nums, int x) {
        int n = nums.size();
        int ans = Integer.MAX_VALUE;
        TreeSet<Integer> ts = new TreeSet<>();
        for(int i = x; i < n; i++) {
            ts.add(nums.get(i-x));
            Integer lower = ts.floor(nums.get(i));
            Integer upper = ts.ceiling(nums.get(i));
            //System.out.println(nums.get(i) + " " + lower + " " + upper);
            if(lower != null) {
                ans = Math.min(ans, Math.abs(lower - nums.get(i)));
            }
            if(upper != null) {
                 ans = Math.min(ans, Math.abs(upper - nums.get(i)));
            }
        }
        return ans;
    }
}