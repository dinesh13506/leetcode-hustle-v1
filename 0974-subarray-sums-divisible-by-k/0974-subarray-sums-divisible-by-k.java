class Solution {
    public int subarraysDivByK(int[] nums, int k) {
        int n = nums.length;
        //store freq of remainder of sum % k
        HashMap<Integer, Integer> freqMap = new HashMap<Integer, Integer>();
        freqMap.put(0,1); //there exists empty array with sum = 0, sum % k = 0;
        int sum = 0;
        int count = 0;
        for(int i = 0; i < n; i++) {
            sum += nums[i];
            int remainder = (sum % k);
            if(remainder < 0) remainder += k; //make remainder positive
            count += freqMap.getOrDefault(remainder,0); //add subarrays at a distance  = multiple of k 
            freqMap.put(remainder,freqMap.getOrDefault(remainder,0) + 1);
        }
        return count;
    }
}