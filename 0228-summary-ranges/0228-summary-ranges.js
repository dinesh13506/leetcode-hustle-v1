/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    
    let stack = [];
    for(let num of nums) {
        if(stack.length == 0) {
            stack.push([num, num]);
        } else {
            let end = stack[stack.length - 1][1];
            if(end + 1 == num) {
                stack[stack.length - 1][1] = num;
            } else {
                stack.push([num, num]);
            }
        }
    }
    //console.log(stack);
    let ans = [];
    let n = stack.length;
    let i = 0;
    while(i < n) {
        let range = stack[i];
        if(range[0] == range[1]) {
            ans.push(`${range[0]}`);
        } else {
            ans.push(`${range[0]}->${range[1]}`);
        }
        i++;
    }
    return ans;
};