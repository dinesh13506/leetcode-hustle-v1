/**
 * @param {number[]} tokens
 * @param {number} power
 * @return {number}
 */
var bagOfTokensScore = function(tokens, power) {
    
    let score = 0;
    tokens.sort((a,b) => {
        return a - b;
    });
    //console.log(tokens)
    const n = tokens.length;
    let p1 = 0, p2 = n - 1;
    while(p1 <= p2) {
        if(power >= tokens[p1]) {
            score++;
            power -= tokens[p1];
            p1++;
        } else if(p1 < p2 && score > 0) {
            score--;
            power += tokens[p2];
            p2--;
        } else {
            return score;
        }
    }
    return score >= 0 ? score : 0;
};