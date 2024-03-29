class KthLargest {

    PriorityQueue<Integer> pq;
    int kth;
    public KthLargest(int k, int[] nums) {
        pq = new PriorityQueue<Integer>( (a,b) -> a - b );
        kth = k;
        for(int i = 0; i < nums.length; i++) {
            pq.add(nums[i]);
        }        
    }
    
    public int add(int val) {
       pq.add(val);
       while(pq.size() > kth) {
           pq.poll();
       }
       int ans = pq.peek();
       return ans;
    }
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * KthLargest obj = new KthLargest(k, nums);
 * int param_1 = obj.add(val);
 */