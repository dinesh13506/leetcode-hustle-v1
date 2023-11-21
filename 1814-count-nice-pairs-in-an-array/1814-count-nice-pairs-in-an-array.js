/**
 * @param {number[]} nums
 * @return {number}
 */
const mod = Math.pow(10, 9) + 7;
var countNicePairs = function(nums) {
    let pairs = 0;
    let map = new Map();
    let reverse = (num) => {
        let ans = 0;
        while(num > 0) {
            let last = num % 10;
            ans = (ans * 10) + last;
            num = parseInt(num / 10);
        }
        return ans;
    }
    
    for(let num of nums) {
        let diff = (num - reverse(num));
        if(map.has(diff)) {
            map.set(diff, map.get(diff) + 1);
        } else {
            map.set(diff,  1);
        }
    }
    for(let key of map.keys()) {
        let n = map.get(key);
        pairs = (pairs + (n * (n-1)/ 2)) % mod;
    }
    return pairs;
};