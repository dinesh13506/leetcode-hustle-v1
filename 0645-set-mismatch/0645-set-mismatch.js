/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    const n = nums.length;
    let map = new Map();
    for(let num of nums) {
        if(map.has(num) == false) {
            map.set(num, 1);
        } else {
            map.set(num, map.get(num) + 1);
        }
    }
    let ans = [];
    for(let i = 1; i<= n; i++) {
        if(ans.length == 2) return ans;
        if(map.has(i) == false) {
            ans.push(i);
        }
        if(map.get(i) == 2) {
            ans.unshift(i);
        }
        
    }
    return ans;
    
};