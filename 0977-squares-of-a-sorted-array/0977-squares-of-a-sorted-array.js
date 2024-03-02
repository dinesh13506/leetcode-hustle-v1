/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    const n = nums.length;
    const ans = [];
    let firstPosIdx = -1;
    for(let i = 0; i < n; i++) {
        if(nums[i] >= 0) {
            firstPosIdx = i;
            break;
        }
    }
    if(firstPosIdx >= 0) {
       let firstNegative = firstPosIdx - 1;
       let i = firstNegative, j = firstPosIdx;
       while(i >= 0 && j < n) {
           let val1 = nums[i] * nums[i];
           let val2 = nums[j] * nums[j];
           if(val1 < val2) {
               ans.push(val1);
               i--;
           } else {
               ans.push(val2);
               j++;
           }
       }
       while(i >= 0) {
           let val1 = nums[i] * nums[i];
           ans.push(val1);
           i--;
       }
       while( j < n) {
           let val2 = nums[j] * nums[j];
           ans.push(val2);
           j++;
       }
    } else {
       for(let i = n-1; i >= 0; i--) {
        ans.push(nums[i] * nums[i]);
       } 
    }
    return ans;
};