/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function(nums) {
    
    let largest = nums[0] > nums[1] ? nums[0] : nums[1];
    let secondLargest = nums[0] > nums[1] ? nums[1] : nums[0];
    let smallest = nums[0] > nums[1] ? nums[1] : nums[0];
    let secondSmallest = nums[0] > nums[1] ? nums[0] : nums[1];
    let length = nums.length
    for(let i = 2; i < length; i++) {
        if(nums[i] > largest) {
            secondLargest = largest
            largest = nums[i]
        } else if(nums[i] > secondLargest) {
            secondLargest = nums[i]
        }
        if(nums[i] < smallest) {
            secondSmallest = smallest
            smallest = nums[i]
        } else if(nums[i] < secondSmallest) {
            secondSmallest = nums[i]
        }
    }
    return (largest*secondLargest) - (smallest*secondSmallest)
};