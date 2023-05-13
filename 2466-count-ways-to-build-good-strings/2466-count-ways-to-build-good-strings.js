/**
 * @param {number} low
 * @param {number} high
 * @param {number} zero
 * @param {number} one
 * @return {number}
 */
var countGoodStrings = function(low, high, zero, one) {
    
    let map = new Map();
    let mod = 1000000007;
    let dp = (len) => {
       if(len < 0) return 0;
       if(len == 0) return 1;
        if(map.has(len)) return map.get(len);
        let withzero = 0;
        if(len - zero >= 0) {
            withzero = dp(len - zero);
        }
        let withone = 0;
        if(len - one >= 0) {
            withone = dp(len - one);
        }
        map.set(len, (withzero + withone) % mod);
        return map.get(len);
     }
    
     let ans = 0;
     for(let len = low; len <= high; len++) {
         ans += (dp(len));
         ans = ans % mod;
     }
     return ans;
};