class Solution {
    public int longestConsecutive(int[] nums) {
        int n = nums.length;
        if(n <= 0 ) return 0;
        else if(n == 1) return 1;
        int ans = 1;
        HashSet<Integer> set = new HashSet<>();
        for(int num : nums) set.add(num);
        for(int num : set) {
            if(!set.contains(num - 1)) {
                int curr = num;
                int count = 1;
                while(set.contains(curr + 1)) {
                    count++;
                    curr++;
                }
                ans = count > ans ? count : ans;
            }
        }
        return ans;
    }
}