/**
 * @param {number} low
 * @param {number} high
 * @param {number} zero
 * @param {number} one
 * @return {number}
 */
var countGoodStrings = function(low, high, zero, one) {
    
    let arr = new Array(high + 1);
    arr.fill(null);
    let mod = 1000000007;
    let dp = (len) => {
       if(len < 0) return 0;
       if(len == 0) return 1;
        if(arr[len] != null) return arr[len];
        let withzero = 0;
        if(len - zero >= 0) {
            withzero = dp(len - zero);
        }
        let withone = 0;
        if(len - one >= 0) {
            withone = dp(len - one);
        }
        arr[len] =  ((withzero + withone) % mod);
        return  arr[len];
     }
    
     let ans = 0;
     for(let len = low; len <= high; len++) {
         ans += (dp(len));
         ans = ans % mod;
     }
     return ans;
};