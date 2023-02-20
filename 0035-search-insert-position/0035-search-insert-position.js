/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    const n = nums.length;
    let start = 0;
    let end = n - 1;
    while(start <= end) {
        let mid = start + parseInt((end - start) / 2);
        if(nums[mid] == target) return mid;
        else if(target < nums[mid]) end = mid - 1;
        else start = mid + 1;
    }
    
    start = 0;
    end = n - 1;
    if(target > nums[end]) return n;
    if(target < nums[start]) return 0;
    let index = Number.MAX_VALUE;
    while(start <= end) {
        let mid = start + parseInt((end - start) / 2);
        //console.log(start, mid, end, index, nums[mid], target);
        if(target < nums[mid]) { 
            if(index == Number.MAX_VALUE) {
                index = mid;
            } else {
                index = Math.min(index, mid);
            }
            end = mid - 1 
        }
        else  { 
            start = mid + 1;
        }
    }
    return index;
    
};