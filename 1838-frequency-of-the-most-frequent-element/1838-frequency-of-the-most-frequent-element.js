/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxFrequency = function(nums, k) {
    
    let ans = 0;
    nums.sort((a,b) =>  a - b);
    const n = nums.length;
    let left = 0;
    let sum = 0;
    for(let right = 0;  right < n; right++) {
        sum = sum + nums[right];
        while(nums[right] * (right - left + 1) > k + sum) {
            sum = sum - nums[left];
            left++;
        }
        ans = Math.max(ans, (right - left + 1));
    }
    return ans;
    
    
};