/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = [];
    let operators = ["+", "-","*","/"];
    for(let token of tokens) {
        if(operators.indexOf(token) >= 0) {
            let op2 = stack.pop();
            let op1 =  stack.pop();
            let ans;
            if(token == '+') {
                ans = op1 + op2;
            } else if(token == '-') {
                ans = op1 - op2;
            } else if(token == '*') {
                ans = op1 * op2;
            } else if(token == '/') {
                ans = parseInt(op1 / op2);
            }
            stack.push(ans);
        } else {
            stack.push(parseInt(token));
        }
    }
    return stack.pop();
};