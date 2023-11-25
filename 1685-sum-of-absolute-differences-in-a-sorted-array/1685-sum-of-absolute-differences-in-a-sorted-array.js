/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSumAbsoluteDifferences = function(nums) {
    
    const n = nums.length;
    let ans = [];
    let prefixSum = [];
    let sum = 0;
    for(let i = 0; i < n; i++) {
        sum = sum + nums[i];
        prefixSum[i] = sum;
    }
    for(let i = 0; i < n; i++) {
        let leftCount = i;
        let rightCount =  n - (i + 1);
        let leftsum = (i >= 1) ? (leftCount * nums[i]) - prefixSum[i-1]: 0;
        let rightsum = (prefixSum[n-1] - prefixSum[i]) - (rightCount * nums[i]);
        ans.push(leftsum + rightsum);
    }
    return ans;
};