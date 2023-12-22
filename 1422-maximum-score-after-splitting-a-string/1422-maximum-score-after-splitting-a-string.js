/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function(s) {
    
    const n = s.length;
    let totalOnes = 0;
    let leftZeros = 0;
    let score = 0;
    for(let ch of s) {
        if(ch == '1') totalOnes++;
    }
    for(let i = 0; i < n - 1; i++) {
        let ch = s.charAt(i);
        if(ch == '0') leftZeros++;
        let onesOnRight = totalOnes ? totalOnes - (i + 1 - leftZeros) : 0;
        //console.log()
        score = Math.max(score, leftZeros + onesOnRight);
    }
    return score;
};