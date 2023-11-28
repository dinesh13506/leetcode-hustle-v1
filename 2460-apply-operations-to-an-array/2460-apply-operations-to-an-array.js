/**
 * @param {number[]} nums
 * @return {number[]}
 */
var applyOperations = function(nums) {
    const n = nums.length;
    for(let i = 0; i < n - 1; i++) {
        if(nums[i] == nums[i+1]) {
            nums[i] = 2 * nums[i];
            nums[i+1] = 0;
        }
    }
    //console.log(nums);
    let ans = new Array(n)
    ans.fill(0);
    let p1 = 0;
    let p2 = 0;
    while(p1 < n) {
        if(nums[p1] != 0) {
            ans[p2] = nums[p1];
            p2++;
        }
        p1++;
    }
    return ans;
    
};