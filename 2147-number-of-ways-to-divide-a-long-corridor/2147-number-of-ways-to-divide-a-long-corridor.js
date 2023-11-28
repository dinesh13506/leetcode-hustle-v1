/**
 * @param {string} corridor
 * @return {number}
 */
var numberOfWays = function(corridor) {
    const mod = 1000000007;
    const n = corridor.length;
    let memo = new Map()
    
    let cal = (index, seats) => {
        if(index >= n) {
            if(seats == 2) {
                return 1;
            } else {
                return 0;
            }
        }
        
        if(memo.has(`${index}_${seats}`)) {
            return memo.get(`${index}_${seats}`)
        }
        let current = corridor[index];
        let ans = 0;
        if(seats == 2) {
            if(current == 'S') {
                ans = cal(index + 1, 1);
            } else {
                ans = (cal(index + 1, 0) + cal(index + 1, 2)) % mod;
            }
        } else {
            if(current == 'S') {
                ans = cal(index + 1, seats + 1);
            } else {
                ans = cal(index + 1, seats + 0)
            }
        }
        memo.set(`${index}_${seats}`, ans);
        return ans;
    }
    return cal(0,0)
};