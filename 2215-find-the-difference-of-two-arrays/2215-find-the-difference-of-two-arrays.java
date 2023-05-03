class Solution {
    public List<List<Integer>> findDifference(int[] nums1, int[] nums2) {
        
        Set<Integer> s1 = new HashSet<Integer>();
        Set<Integer> s2 = new HashSet<Integer>();
        for(int i = 0; i < nums1.length; i++) {
            if(s1.contains(nums1[i])) continue;
            s1.add(nums1[i]);
        }
        
        for(int i = 0; i < nums2.length; i++) {
            if(s2.contains(nums2[i])) continue;
            s2.add(nums2[i]);
        }
        
        List<List<Integer>> ans = new ArrayList<List<Integer>>();
        ans.add(new ArrayList<Integer>());
        ans.add(new ArrayList<Integer>());
        for(int el : s1) {
            if(s2.contains(el)) {
                continue;
            }
                
            ans.get(0).add(el);
        }
        
        for(int el : s2) {
            if(s1.contains(el)) continue;
            ans.get(1).add(el);
        }
        return ans;
    }
}