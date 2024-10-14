class Solution {
    public long maxKelements(int[] nums, int k) {
        long score = 0;
        final int n = nums.length;
        PriorityQueue<Integer> pq = new PriorityQueue<Integer>(new Comparator<Integer>() {
            @Override
            public int compare(Integer o1, Integer o2) {
                return o2.intValue() - o1.intValue();
            }
        });
        for(int i = 0; i < n ; i++) {
            pq.add(nums[i]);
        }
        while(k > 0 && pq.size() > 0) {
            int value = pq.poll();
            //System.out.println(value + " " +  Math.ceil((double) value / 3));
            score += value;
            pq.add((int) Math.ceil((double) value / 3));
            k--;
        }
        return score;
    }
}