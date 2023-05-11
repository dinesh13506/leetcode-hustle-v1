/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxUncrossedLines = function(nums1, nums2) {
    
    let memo = new Array(nums1.length);
    for(let i = 0; i < nums1.length; i++) {
        memo[i] = new Array(nums2.length);
        memo[i].fill(-1);
    }
    let dp = (i, j) => {
        if(i < 0 || j < 0) {
            return 0;
        }
        if(memo[i][j] != -1) return memo[i][j];
        
        if(nums1[i] == nums2[j]) {
            memo[i][j] =  1 + dp(i - 1, j -1);
        } else {
            memo[i][j] =  Math.max(dp(i-1, j), dp(i, j-1));
        }
        return memo[i][j];
    }
    
    return dp(nums1.length - 1, nums2.length - 1);
};