/**
 * @param {string} s
 * @return {string}
 */
var maximumOddBinaryNumber = function(s) {
    let count = 0;
    let zeros = 0;
    for(let ch of s) {
        if(ch == '1') count++;
        else zeros++;
    }
    let ans = ''
    if(count >= 1) { ans = ans + '1'; count --;}
    while(zeros > 0) {
        ans ='0' + ans;
        zeros--;
    }
    while(count > 0) {
        ans = '1' + ans;
        count--;
    }
    
    return ans;
    
};