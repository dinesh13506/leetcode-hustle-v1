/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let temp = init;
    for(let num of nums) {
        temp = fn(temp, num);
    }
    return temp;
};