/**
 * @param {number} n
 * @param {number} k
 * @param {number} target
 * @return {number}
 */
var numRollsToTarget = function(n, k, target) {
    
    
    let memo = new Array(n + 1);
    for(let i = 0; i <= n; i++) {
        memo[i] = new Array(target + 1);
        memo[i].fill(null);
    }
    let mod = Math.pow(10, 9) + 7;
    
    let dp = (i, sum) => {
        //console.log(i, sum)
        if(sum == 0 && i == 0 ) return 1;
        if(sum <= 0  || i == 0) return 0;
        
        if(memo[i][sum] != null) {
            return (memo[i][sum] % mod)
        }
        let ans = 0;
        for(let h = 1; h <= k; h++) {
            ans = (ans + dp(i - 1, sum - h)) % mod;
        }
        memo[i][sum] = ans % mod;
        return memo[i][sum];
    }
    
    dp(n, target);
    return memo[n][target]
};