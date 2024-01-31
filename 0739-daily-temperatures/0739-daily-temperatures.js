/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    
    const n = temperatures.length;
    let increasingStack = [];
    let ans = new Array(n);
    ans.fill(0);
    for(let i = 0; i < n; i++) {
        if(increasingStack.length == 0) {
            increasingStack.push(i);
        } else {
            let top = increasingStack[increasingStack.length - 1];
            while(increasingStack.length && temperatures[i] > temperatures[top]) {
                ans[top] = i - top;
                increasingStack.pop(i);
                top = increasingStack[increasingStack.length - 1];
            }
            increasingStack.push(i)
        }
    }
    return ans;
    
    
};