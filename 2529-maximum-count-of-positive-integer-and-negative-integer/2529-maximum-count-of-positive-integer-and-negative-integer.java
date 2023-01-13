class Solution {
    public int maximumCount(int[] nums) {
        int n = nums.length;
        int start = 0, end = n - 1;
        int firstIdx = -1;
        int lastIdx = -1;
        while(start <= end) {
            int mid = start + (end - start) / 2;
            if(nums[mid] == 0) {
                if(firstIdx == -1) {
                    firstIdx = mid;
                } else {
                    firstIdx = Math.min(firstIdx, mid);
                }
                end = mid - 1;
            } else {
                if(nums[mid] > 0) {
                    end = mid - 1;
                } else {
                    start = mid + 1;
                }
            }
        }
        start = 0;
        end = n - 1;
        while(start <= end) {
            int mid = start + (end - start) / 2;
            if(nums[mid] == 0) {
                if(lastIdx == -1) {
                    lastIdx = mid;
                } else {
                    lastIdx = Math.max(lastIdx, mid);
                }
                start = mid + 1;
            } else {
                if(nums[mid] > 0) {
                    end = mid - 1;
                } else {
                    start = mid + 1;
                }
            }
        }
        if(firstIdx == lastIdx && firstIdx == -1) {
            if(nums[0] > 0 && nums[n-1] > 0) return n;
            if(nums[0] < 0 && nums[n-1] < 0) return n;
            int firstPos = -1;
            start = 0;
            end = n-1;
            while(start <= end) {
                int mid = start + (end - start) / 2;
                if(nums[mid] <= 0) {
                    start = mid + 1;
                } else {
                    if(firstPos == -1) {
                        firstPos = mid;
                    } else {
                        firstPos = Math.min(firstPos, mid);
                    }
                    end = mid - 1;
                }
            }
            return Math.max(firstPos, n - firstPos);
        } else {
            int neg = firstIdx;
            int pos = n - lastIdx - 1;
            return Math.max(neg, pos);
        }
        
    }
}