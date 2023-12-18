/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[][]}
 */
var divideArray = function(nums, k) {
    nums.sort((a, b) => {
        return a - b;
    })
    let n = nums.length;
    let ans = [];
    if(n % 3 != 0) {
        return ans;
    }
    //console.log(nums)
    for(let i = 0; i < n; i = i + 3) {
        let d1 = Math.abs(nums[i]-nums[i+1]);
        let d2 = Math.abs(nums[i + 1]-nums[i + 2]);
        let d3 = Math.abs(nums[i]-nums[i + 2]);
        //console.log(d1, d2, d3)
        if(d1 > k || d2 > k || d3 > k) {
            //return [];
            continue;
        } else {
            ans.push([nums[i], nums[i+1], nums[i+2]]);
        }
    }
    return ans.length * 3 != nums.length ? [] : ans;
};