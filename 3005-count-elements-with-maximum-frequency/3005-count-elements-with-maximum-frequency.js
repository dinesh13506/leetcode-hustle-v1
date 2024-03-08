/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {
    let map = new Map();
    let max = 0;
    for(let num of nums) {
        let c = map.get(num) || 0;
        c++;
        map.set(num , c + 1);
        if(max < c + 1) max = c + 1;
    }
    let ans = 0;
    for(let num of nums) {
        if(map.get(num) == max) ans++;
    }
    return ans;
};