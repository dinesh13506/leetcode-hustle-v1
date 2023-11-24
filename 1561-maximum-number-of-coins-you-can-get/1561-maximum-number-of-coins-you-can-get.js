/**
 * @param {number[]} piles
 * @return {number}
 */
var maxCoins = function(piles) {
    const n = piles.length;
    let p1 = 1;
    let ans = 0;
    piles.sort((a,b) => {
         return b - a;
    });
    //console.log(piles)
    
    while(p1 < (2 * n / 3)) {
        ans += piles[p1];
        //console.log(piles[p1])
        p1 += 2;
    }
    return ans;
};