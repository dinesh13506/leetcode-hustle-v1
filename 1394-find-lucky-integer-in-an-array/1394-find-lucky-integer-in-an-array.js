/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
    let freq = new Map();
    for(let num of arr) {
        freq.set(num, (freq.get(num) ||  0) + 1);
    }
    
    let ans = -1;
    for(let key of freq.keys()) {
        let value = freq.get(key);
        if(key == value) {
            ans = ans < value? value : ans;
        }
    }
    return ans;
};