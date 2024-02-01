/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[][]}
 */
var divideArray = function(nums, k) {
    nums.sort((a,b) => {
        return a - b;
    });
    
    let n = nums.length;
    let p = 0;
    let ans = [];
    while(p < n && p + 1 < n && p + 2 < n) {
        let d1 = Math.abs(nums[p]- nums[p+1]);
        let d2 = Math.abs(nums[p+1]- nums[p+2]);
        let d3 = Math.abs(nums[p]- nums[p+2]);
        if(d1 <= k && d2 <= k && d3 <= k) {
            ans.push([nums[p], nums[p + 1], nums[p+2]]);
            p = p + 3;
        } else {
            return [];
            p = p + 1;
        }
    }
    //console.log(ans);
    if(ans.length * 3 == n) return ans;
    return [];
};