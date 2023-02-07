class Solution {
    public int totalFruit(int[] fruits) {
        HashMap<Integer, Integer> count = new HashMap<Integer, Integer>();
        int left = 0;
        int right = 0;
        int ans = 0;
        for(right = 0; right < fruits.length; right++) {
            count.put(fruits[right], count.getOrDefault(fruits[right], 0) + 1);
            if(count.size() > 2 ) {
                count.put(fruits[left], count.get(fruits[left]) - 1);
                if(count.get(fruits[left]) == 0) {
                    count.remove(fruits[left]);
                }
                left++;
            }
        }
        return right - left;
    }
}