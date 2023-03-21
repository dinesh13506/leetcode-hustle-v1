/**
 * @param {number[]} nums
 * @return {number}
 */
var zeroFilledSubarray = function(nums) {
    let stack = []
    let prev = nums[0]
    if(prev == 0) {
        stack.push(prev)
    }
    for(let num of nums) {
        let curr = num
        if(curr == 0) {
            if(curr == prev) {
                let top = stack.pop()
                top++
                stack.push(top)
            } else {
                stack.push(1)
            }
        }
        prev = curr
    }
    //console.log(stack)
    let ans = 0
    for(let count of stack) {
        ans += (count * (count + 1) / 2)
    }
    return ans
};