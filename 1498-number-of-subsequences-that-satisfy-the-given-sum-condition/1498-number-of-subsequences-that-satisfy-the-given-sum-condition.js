/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var numSubseq = function(nums, target) {
    
    const mod = 1000000007;
    nums.sort((a,b) => {
        return a - b;
    });
    
    let n = nums.length;
    
    let pow = new Array(n);
    pow[0] = 1;
    for(let i = 1; i < n; i++) {
        pow[i] = (2 * pow[i-1]) % mod;
    }
    
    let bs = (start, end, value) => {
        
        let ans = -1;
        while(start <= end) {
            let mid = start + parseInt((end - start) / 2);
            if(nums[mid] <= value) {
                ans = mid;
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
        return ans;
    }
    
    let ans = 0;
    for(let i = 0; i < n; i++) {
        let min = nums[i];
        let right = bs(i, n-1, target - min);
        if(right >= 0) {
            ans = ans +  pow[right - i];
            ans = ans % mod;
        }
        
    }
    
    return ans;
};