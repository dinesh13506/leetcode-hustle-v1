/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function(nums, goal) {
    let ans = 0;
    let map = new Map();
    let sum = 0;
    for(let num of nums) {
        sum += num;
        if(sum == goal) ans++;
        let numberOfSubArraysWithRemSum = map.get(sum - goal) || 0;
        ans = ans + numberOfSubArraysWithRemSum;
        map.set(sum, (map.get(sum) || 0) + 1);
        
    }
    return ans;
};