class Solution {
    public int subarraysDivByK(int[] nums, int k) {
        int n = nums.length;
        HashMap<Integer, Integer> freqMap = new HashMap<Integer, Integer>();
        freqMap.put(0,1);
        int sum = 0;
        int count = 0;
        for(int i = 0; i < n; i++) {
            sum += nums[i];
            int remainder = sum % k;
            if(remainder < 0) remainder += k; 
            count += freqMap.getOrDefault(remainder,0);
             freqMap.put(remainder,freqMap.getOrDefault(remainder,0) + 1);
        }
        return count;
    }
}