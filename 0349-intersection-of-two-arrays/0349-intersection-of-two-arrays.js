/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let s1 = new Set();
    let s2 = new Set();
    for(let num of nums1) {
        s1.add(num);
    }
    for(let num of nums2) {
        s2.add(num);
    }
    let ans = new Set();
    for(let num of nums2) {
        if(s1.has(num)) {
            ans.add(num);
        }
    }
    return [...ans];
    
};