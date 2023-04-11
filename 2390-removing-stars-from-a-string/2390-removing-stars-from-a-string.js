/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
    
    let stack = [];
    for(let i = 0; i < s.length; i++) {
        let ch = s.charAt(i);
        if(ch == '*') {
            if(stack.length) {
                stack.pop();
            }
        } else {
            stack.push(ch);
        }
    }
    return stack.join('');
};