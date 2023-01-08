class Solution {
    public int[] twoSum(int[] numbers, int target) {
        int[] ans = new int[2];
        int n = numbers.length;
        int p1 = 0, p2 = n - 1;
        while(p1 < p2) {
            int sum = numbers[p1] + numbers[p2];
            if(sum == target) {
                ans[0] = p1 + 1;
                ans[1] = p2 + 1;
                break;
            } else if(sum < target) {
                p1++;
            } else {
                p2--;
            }
        }
        return ans;
    }
}