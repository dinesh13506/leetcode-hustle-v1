/**
 * @param {number[]} nums
 * @return {number}
 */
var maxScore = function(nums) {
    
    let n = nums.length;
    let memo = new Map();
    let visited = new Array(n).fill(0);
    
    
    let gcd = (a, b) => {
        if(b == 0) return a;
        return gcd(b, a % b);
    }
    
    let dp = (pairs) => {
        if(2 * pairs == n) return 0;
        
        let state = visited.join(',');
        if(memo.get(state)) return memo.get(state);
        
        let max = 0;
        for(let i = 0; i < n; i++) {
            for(let j = i + 1; j < n; j++) {
                
                //check if i is picked
                if(visited[i] == 1) continue;
                //check if j is picked
                if( visited[j] == 1) continue;
                
                visited[i] = 1;
                visited[j] = 1;
                let curr = (pairs + 1) * gcd(nums[i], nums[j]);
                let remain = dp(pairs + 1);
                max = Math.max(max, curr + remain);
                visited[i] = 0;
                visited[j] = 0;
                
            }
        }
        memo.set(state, max);
        return memo.get(state);
    }
    
    return dp(0);
};