/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeBitwiseAnd = function(left, right) {
    let shifts = 0;
    while(left != right) {
        left = left >> 1;
        right = right >> 1;
        shifts++;
    }
    return left << shifts;
};