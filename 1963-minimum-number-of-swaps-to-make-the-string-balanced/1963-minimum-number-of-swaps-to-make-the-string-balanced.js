/**
 * @param {string} s
 * @return {number}
 */
var minSwaps = function(s) {
    let open = 0, closed = 0;
    for(let ch of s) {
        if(ch == '[') {
            open++;
        } else {
            if(open > 0) {
                open--;
            } else {
                closed++;
            }
        }
    }
    
    return parseInt((closed + 1) / 2);
};