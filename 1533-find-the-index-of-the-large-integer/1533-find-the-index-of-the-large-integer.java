/**
 * // This is ArrayReader's API interface.
 * // You should not implement it, or speculate about its implementation
 * interface ArrayReader {
 *     // Compares the sum of arr[l..r] with the sum of arr[x..y] 
 *     // return 1 if sum(arr[l..r]) > sum(arr[x..y])
 *     // return 0 if sum(arr[l..r]) == sum(arr[x..y])
 *     // return -1 if sum(arr[l..r]) < sum(arr[x..y])
 *     public int compareSub(int l, int r, int x, int y) {}
 *
 *     // Returns the length of the array
 *     public int length() {}
 * }
 */

class Solution {
    public int getIndex(ArrayReader reader) {
        int n = reader.length();
        int start = 0, end = n-1;
        while(start < end) {
            int mid = (start + end)/ 2;
            int mid2 = (start + end + 1) /2;
            int sum = reader.compareSub(start, mid, mid2, end);
            if(sum < 0) {
                start = mid2;
            } else  {
                end = mid;
            }
        }
        return start;
    }
}