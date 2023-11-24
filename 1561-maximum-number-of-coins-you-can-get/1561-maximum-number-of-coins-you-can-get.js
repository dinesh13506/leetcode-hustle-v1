/**
 * @param {number[]} piles
 * @return {number}
 */
var maxCoins = function(piles) {
    
    let p1 = 0;
    let p2 = 1;
    let p3 = piles.length - 1;
    const n = piles.length;
    piles.sort((a,b) => {
         return b - a;
    });
    //console.log(piles);
    let ans = 0;
    while(p1 < n && p2 < n && p3 > p2 && p3 >= 0) {
        //console.log(piles[p2])
        ans += piles[p2];
        p1 = p2 + 1;
        p2 = p1 + 1;
        p3--;
    }
    return ans;
};