/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let count = 0;
    while(n!= 0) {
        let bit = n & 1; //get last bit
        if(bit == 1) {
            count++;
        }
        n = n >>> 1; //right shift by 1 but sign should zero copied
    }
    return count;
};

