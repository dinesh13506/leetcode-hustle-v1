class Solution {
    Set<List<Integer>> set;
    public boolean isIncreasingSeq(List<Integer> list, int currElement) {
        if(list.size() == 0) return true;
        int lastElement = list.get(list.size() - 1);
        return currElement >= lastElement;
    }
    
    public void generate(int i, int[] nums, List<Integer> list) {
        if(i >= nums.length) {
            if(list.size() >= 2) {
                set.add(new ArrayList<>(list));
            }
            return;
        }
        int currElement = nums[i];
        if(isIncreasingSeq(list, currElement)) {
            //take it
            list.add(currElement);
            generate(i+1, nums, list);
            
            //not take it
            list.remove(list.size() - 1); //remove added first
            generate(i+1, nums, list);
        } else {
             generate(i+1, nums, list);
        }
       
    }
    public List<List<Integer>> findSubsequences(int[] nums) {
        set = new HashSet<List<Integer>>();
        generate(0, nums, new ArrayList<Integer>());
        List<List<Integer>> ans = new ArrayList<>(set);
        return ans;
    }
}