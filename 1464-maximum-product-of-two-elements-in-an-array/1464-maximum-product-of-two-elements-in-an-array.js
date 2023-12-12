/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    const n = nums.length;
    let max1 = Math.max(nums[0],nums[1]) ;
    let max2 = Math.min(nums[0],nums[1]);
    for(let i = 2; i < n; i++) {
        //console.log(max1,max2)
        if(nums[i] > max1) {
            max2 = max1;
            max1 = nums[i];
        } else if(nums[i] > max2) {
            max2 = nums[i];
        }
    }
    return (max1-1) * (max2-1);
};