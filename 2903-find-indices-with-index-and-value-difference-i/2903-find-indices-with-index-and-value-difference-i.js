/**
 * @param {number[]} nums
 * @param {number} indexDifference
 * @param {number} valueDifference
 * @return {number[]}
 */
var findIndices = function(nums, indexDifference, valueDifference) {
    let ans = [-1, -1];
    const n = nums.length;
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            if(Math.abs(i-j) >= indexDifference && Math.abs(nums[i]-nums[j]) >= valueDifference) {
                return [i,j];
            }
        }
    }
    return ans;
};