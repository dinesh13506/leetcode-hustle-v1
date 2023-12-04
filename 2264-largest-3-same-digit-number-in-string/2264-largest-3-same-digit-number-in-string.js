/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function(num) {
    let max = -Infinity;
    let ans = "";
    for(let i= 0; i <= num.length - 3; i++) {
        let d = '';
        for(let j = i; j < i + 3; j++) {
            if(!d) {
               d = num[j]; 
            }
            else if(num[j]==d) {
                d = num[j];
            } else {
                d = null;
                break;
            }
        }
        let str = d+d+d;
        if(d && parseInt(str) > max) {
            max = parseInt(str)
            ans = str;
        }
    }
    return ans;
};