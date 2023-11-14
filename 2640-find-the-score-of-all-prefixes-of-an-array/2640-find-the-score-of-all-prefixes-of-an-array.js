/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findPrefixScore = function(nums) {
    const n = nums.length;
    let conver = new Array(n);
    let ans = new Array(n);
    let max = 0;
    let sum = 0;
    for(let i = 0; i < n; i++)  {
        ans[i] = 0;
        max = max < nums[i] ? nums[i] : max;
        conver[i] = max + nums[i];
        sum += conver[i];
        ans[i] = sum;
    }
    return ans;
};