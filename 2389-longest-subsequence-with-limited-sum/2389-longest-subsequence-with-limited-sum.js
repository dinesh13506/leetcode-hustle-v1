/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var answerQueries = function(nums, queries) {
    let ans = []
    nums.sort((a,b) => { return a - b })
    for(let target of queries) {
        let sum = 0
        for(let i = 0; i < nums.length; i++) {
            sum = sum + nums[i]
            if(sum > target) {
                ans.push(i)
                break
            }
        }
        if(sum <= target) {
            ans.push(nums.length)
        }
    }
    return ans
};