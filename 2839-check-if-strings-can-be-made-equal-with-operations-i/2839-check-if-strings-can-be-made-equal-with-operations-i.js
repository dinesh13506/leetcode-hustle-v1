/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var canBeEqual = function(s1, s2) {
    if(s1 == s2) {
        return true;
    }
    let a1 = s1.split('');
    let a2 = s2.split('');
    
    let temp1 = s1[0].charCodeAt() < s1[2].charCodeAt() ? s1[0]+s1[2] : s1[2]+s1[0];
    let temp2 = s2[0].charCodeAt() < s2[2].charCodeAt() ? s2[0]+s2[2] : s2[2]+s2[0];
    if(temp1 != temp2) {
        return false;
    }
    temp1 = s1[1].charCodeAt() < s1[3].charCodeAt() ? s1[1]+s1[3] : s1[3]+s1[1];
    temp2 = s2[1].charCodeAt() < s2[3].charCodeAt() ? s2[1]+s2[3] : s2[3]+s2[1];
    if(temp1 != temp2) {
        return false;
    }
    return true;
    
    
};