/**
 * @param {number[]} nums
 * @return {number}
 */
var averageValue = function(nums) {
    let count = 0, sum = 0;
    for(let num of nums) {
        if( (num & 1) == 0 && (num % 3 == 0)) {
            count++;
            sum += num;
        }
    }
    if(sum > 0) return parseInt(sum/count);
    return 0;
};