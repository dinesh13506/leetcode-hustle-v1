/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    
    let set = new Set();
    for(let ar of arr) {
        set.add(ar);
    }
    
    let miss = 0;
    for(let i=1; i <= 2000; i++) {
        if(set.has(i)) {
            continue;
        } else {
            miss++;
            if(miss == k) return i;
        }
    }
    
};