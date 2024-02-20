/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    
    const n = nums.length;
    let expectedSum = parseInt( n * (n + 1) * 0.5 );
    let runningSum = 0;
    for(let num of nums) {
        runningSum += num;
    }
    return expectedSum - runningSum;
};