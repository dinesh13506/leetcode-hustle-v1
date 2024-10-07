/**
 * @param {string} s
 * @return {number}
 */
var minLength = function(s) {
    
    let stack = [];
    for(let ch of s) {
        if(stack.length == 0) {
            stack.push(ch);
            continue;
        } else if(ch == 'B' || ch == 'D') {
            let top = stack[stack.length-1];
            //console.log(top+ch, top+ch=='AB',  top+ch=='CD')
            if(top+ ""+ ch == "AB") stack.pop();
            else if(top+""+ch == "CD") stack.pop();
            else stack.push(ch);
        } else {
            stack.push(ch);
        }
        //console.log(stack)

    }
    return stack.length;
};