/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function(s) {
    
    const n = s.length;
    let ch1 = 0;
    let ch2 = 1;
    let ans1 = n;
    let ans2 = n;
    for(let i = 0; i < n; i++) {
        let ch = s.charAt(i);
        if(ch == ch1) {
            ans1--;
        }
        if(ch == ch2) {
            ans2--;
        }
        ch1 = ch1 == 0 ? ch1 + 1 : ch1 - 1;
        ch2 = ch2 == 0 ? ch2 + 1 : ch2 - 1;
    }
    return Math.min(ans1, ans2);
};