/**
 * @param {string} colors
 * @param {number[]} neededTime
 * @return {number}
 */
var minCost = function(colors, neededTime) {
    
    let stack = [];
    let sum = 0;
    for(let i = 0; i < colors.length; i++) {
        let ch = colors.charAt(i);
        if(stack.length == 0) {
            stack.push({
                top : ch,
                count : 1,
                max : neededTime[i]
            })
        } else if(stack[stack.length - 1].top == ch) {
            stack[stack.length - 1].count++;
            stack[stack.length - 1].max = Math.max(stack[stack.length - 1].max, neededTime[i]);
        } else {
            stack.push({
                top : ch,
                count : 1,
                max : neededTime[i]
            })
        }
        sum += neededTime[i];
    }
    
    while(stack.length) {
        let top = stack.pop();
        sum -= top.max;
    }
    return sum;
};