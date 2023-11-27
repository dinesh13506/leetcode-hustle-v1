/**
 * @param {number} n
 * @return {number}
 */
var knightDialer = function(n) {
    
    let canGo = [
        [4,6],//from 0
        [6,8], //from 1,
        [7,9], //from 2
        [8,4], // from 3
        [3,9,0], //from 4
        [], // from 5,
        [1, 7, 0], //from 6
        [2, 6],// from 7
        [1, 3], //from 8
        [2, 4], // from 9
    ];
    
    let ans = 0;
    let mod = Math.pow(10, 9) + 7;
    let memo = new Array(10);
    for(let i = 0; i < 10; i++) {
        memo[i] = new Array(n+1);
        memo[i].fill(null);
    }
    
    let dp = (curr, moves) => {
        if(moves == n) {
            return 1;
        }
        if(memo[curr][moves]) {
            return memo[curr][moves];
        }
        let count = 0;
        for(let nextMove of canGo[curr]) {
            count = (count + dp(nextMove, moves + 1)) % mod;
        }
        memo[curr][moves] = count;
        return count;
    }
    
    for(let i = 0; i < 10; i++) {
        ans = (ans + dp(i, 1)) % mod;
    }
    return ans;
};