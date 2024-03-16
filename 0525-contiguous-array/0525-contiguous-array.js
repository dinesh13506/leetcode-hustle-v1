/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
    
    let map = {}
    map[0] = -1
    let res = 0
    let count = 0
    for( let i = 0; i < nums.length; i++ ) {
        count = count + ( nums[i] == 1 ? 1 : -1)
        if( map[count] != undefined ) {
            res = Math.max( res, i - map[count])
        }
        else {
            map[count] = i
        }
        
    }
    
    return res
};