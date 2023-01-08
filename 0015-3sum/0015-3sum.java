class Solution {
    public void twoSum(int i ,int n, int[] nums,  List<List<Integer>> ans) {
        int p1 = i + 1;
        int p2 = n - 1;
        while(p1 < p2) {
            int sum = nums[i] + nums[p1] + nums[p2];
            if(sum < 0) {
                p1++;
            } else if(sum > 0) {
                p2--;
            } else {
                List<Integer> trip = new ArrayList<>();
                trip.add(nums[i]);
                trip.add(nums[p1]);
                trip.add(nums[p2]);
                ans.add(trip);
                p1++;
                p2--;
                while(p1 < p2 && nums[p1-1] == nums[p1]) {
                    p1++;
                }
            }
        }
    }
    public List<List<Integer>> threeSum(int[] nums) {
        int n = nums.length;
        List<List<Integer>> ans = new ArrayList<>();
        Arrays.sort(nums);
        for(int i = 0; (i < n && nums[i] <= 0) ; i++) {
            if(i == 0 || nums[i-1] != nums[i]) {
                twoSum(i,n,nums, ans);
            }
        }
        return ans;
    }
}