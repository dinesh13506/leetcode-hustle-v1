/**
 * @param {number[]} nums
 * @return {number}
 */
var reductionOperations = function(nums) {
    
    nums.sort((a,b) => { return a - b});
    //console.log(nums)
    
    let stack = [];
    for(let num of nums) {
        if(stack.length == 0) {
            stack.push({value : num , count : 1});
        } else if(stack[stack.length-1].value == num) {
            stack[stack.length-1].count++;
        } else {
            stack.push({value : num , count : 1});
        }
    }
    //console.log(stack);
    let ops = 0;
    while(stack.length > 1) {
        let top = stack.pop();
        stack[stack.length-1].count += top.count;
        ops = ops +  top.count;
    }
    return ops
};