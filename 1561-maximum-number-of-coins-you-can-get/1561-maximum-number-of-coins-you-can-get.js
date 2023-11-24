/**
 * @param {number[]} piles
 * @return {number}
 */
var maxCoins = function(piles) {
    const n = piles.length;
    let p1 = 0;
    let p2 = 1;
    let p3 = n - 1;
    let ans = 0;
    piles.sort((a,b) => {
         return b - a;
    });
    
    while(p1 < n && p2 < n && p3 > p2 && p3 >= 0) {
        ans += piles[p2];
        p1 = p2 + 1;
        p2 = p1 + 1;
        p3--;
    }
    return ans;
};