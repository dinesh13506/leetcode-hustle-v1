class Solution {
    public int[] topKFrequent(int[] nums, int k) {
        HashMap<Integer, Integer> countMap = new HashMap<Integer, Integer>();
        PriorityQueue<Integer> minHeap = new PriorityQueue<Integer>((a,b) -> {
            return countMap.get(a) - countMap.get(b);
        });
        for(int num : nums) {
            countMap.put(num, countMap.getOrDefault(num, 0) + 1);
        }
        for(int num : countMap.keySet()) {
            if(minHeap.size() < k) {
                minHeap.add(num);
            }
            else {
                if(countMap.get(minHeap.peek()) < countMap.get(num)) {
                    minHeap.poll();
                    minHeap.add(num);
                }
            }
        }
        int[] ans = new int[minHeap.size()];
        int i = 0;
        while(!minHeap.isEmpty()) {
            ans[i] = minHeap.poll();
            i++;
        }
        return ans;
    }
}