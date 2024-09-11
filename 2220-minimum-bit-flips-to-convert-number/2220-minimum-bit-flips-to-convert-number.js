/**
 * @param {number} start
 * @param {number} goal
 * @return {number}
 */
var minBitFlips = function(start, goal) {
    
    let s = start;
    let t = goal;
    let flips = 0;
    while(s || t) {
        let b1 = s % 2;
        let b2 = t % 2;
        if(b1 != b2) {
            flips++;
        } 
        s = parseInt(s/2);
        t = parseInt(t/2);
    }
    return flips;
};