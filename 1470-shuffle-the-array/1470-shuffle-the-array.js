/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    
    let i = 0, j = 0;
    let ans = new Array(2*n);
    while(i < n) {
        ans[j] = nums[i];
        ans[j+1] = nums[i+n];
        j += 2;
        i++;
    }
    return ans;
};