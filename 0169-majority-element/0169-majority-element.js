/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    
    let ans = null
    let c = 0
    
    for( let num of nums ) {
        if( c == 0 ) {
            ans = num
            c++
        } else if( num == ans ) {
            c++
        } else {
            c--
        }
    }
    return ans
};