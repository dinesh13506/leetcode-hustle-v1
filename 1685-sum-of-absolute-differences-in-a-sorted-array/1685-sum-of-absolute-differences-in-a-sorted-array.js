/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSumAbsoluteDifferences = function(nums) {
    
    const n = nums.length;
    let ans = [];
    let ps = [];
    let sum = 0;
    for(let i = 0; i < n; i++) {
        sum = sum + nums[i];
        ps[i] = sum;
    }
    //console.log(ps)
    for(let i = 0; i < n; i++) {
        let left = i;
        let right =  n - (i + 1);
        //console.log(left, nums[i], right);
        let leftsum = (i >= 1) ? (left * nums[i]) - ps[i-1]: 0;
        let rightsum = (ps[n-1] - ps[i]) - (right * nums[i]);
        //console.log(leftsum, rightsum);
        ans.push(leftsum + rightsum);
    }
    return ans;
};