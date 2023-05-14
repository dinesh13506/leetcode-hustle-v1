/**
 * @param {number[]} nums
 * @return {number}
 */
var maxScore = function(nums) {
    
    let n = nums.length;
    let size = 1 << n;
    let memo = new Array(size);
    memo.fill(-1);
    
    
    let gcd = (a, b) => {
        if(b == 0) return a;
        return gcd(b, a % b);
    }
    
    let dp = (mask, pairs) => {
        if(2 * pairs == n) return 0;
        
        if(memo[mask] != -1) return memo[mask];
        
        let max = 0;
        for(let i = 0; i < n; i++) {
            for(let j = i + 1; j < n; j++) {
                
                //check if i is picked
                if( ((mask >> i) & 1) == 1) continue;
                //check if j is picked
                if( ((mask >> j) & 1) == 1) continue;
                
                let newmask = mask |  (1 << i) | (1 << j);
                
                let curr = (pairs + 1) * gcd(nums[i], nums[j]);
                let remain = dp(newmask , pairs + 1);
                
                max = Math.max(max, curr + remain);
                
            }
        }
        memo[mask] = max;
        return memo[mask];
    }
    
    return dp(0, 0);
};