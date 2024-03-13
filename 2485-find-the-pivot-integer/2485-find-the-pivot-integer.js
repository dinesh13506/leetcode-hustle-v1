/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function(n) {
    let total = (n * ( n + 1) ) / 2;
    let sum = 0;
    for(let i = 1; i <= n; i++) {
        sum += i;
        let rem = total - sum + i;
        if(rem == sum) return i;
    }
    return -1;
};