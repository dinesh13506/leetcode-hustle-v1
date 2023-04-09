/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    let n = nums.length;
    let ans = new Array(2 * n);
    let i = 0;
    while(i < 2 * n) {
        ans[i] = nums[i%n];
        i++;
    }
    return ans;
};