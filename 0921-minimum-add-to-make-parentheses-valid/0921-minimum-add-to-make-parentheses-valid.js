/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function(s) {
    
    const n = s.length;
    let stack = [];
    let openPara = 0;
    let closePara = 0;
    for(let i = 0; i < n; i++) {
        let ch = s.charAt(i);
        if(stack.length == 0) {
            if(ch == '(') {
                stack.push(ch);
                openPara++;
            } else {
                closePara++;
            }
            continue;
        } else {
            if(ch == '(') {
                stack.push(ch);
                openPara++;
            } else {
                if(openPara > 0) {
                    while(stack.length) {
                        let ch = stack.pop();
                        if(ch == '(') {
                            openPara--;
                            break;
                        }
                    }
                }
                else {
                    closePara++;
                }
            }
        }
        //console.log(stack, openPara, closePara)
    }
    
     //console.log(stack, openPara, closePara)
     return stack.length + closePara;
    
};