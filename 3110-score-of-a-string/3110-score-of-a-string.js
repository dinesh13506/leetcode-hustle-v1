/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function(s) {
    let n = s.length;
    let score = 0;
    //console.log(n);
    let prev = s.charAt(0).charCodeAt();
    for(let i = 1 ; i < n; i++) {
        let curr = s.charAt(i).charCodeAt();
        score += Math.abs(curr - prev);
        prev = curr;
    }
    return score;
};