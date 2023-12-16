/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    
    let count = new Array(26);
    count.fill(0);
    for(let i = 0; i < s.length; i++) {
        count[s.charAt(i).charCodeAt() - 'a'.charCodeAt()]++;
    }
    for(let i = 0; i < t.length; i++) {
        count[t.charAt(i).charCodeAt() - 'a'.charCodeAt()]--;
    }
    for(let i= 0; i < 26; i++) {
        if(count[i] != 0) return false;
    }
    return true;
};