/**
 * @param {string[]} words
 * @param {string} s
 * @return {boolean}
 */
var isAcronym = function(words, s) {
    const n = words.length;
    if(s.length != n) return false;
    let p1 = 0;
    for(let ch of s) {
        if(ch != words[p1].charAt(0)) {
            return false;
        }
        p1++;
    }
    return true;
};