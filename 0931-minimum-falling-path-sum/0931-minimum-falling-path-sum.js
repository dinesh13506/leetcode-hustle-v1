/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function(matrix) {
    
    let m = matrix.length;
    let n = matrix[0].length;
    
    let memo = new Array(m);
    for(let i = 0; i < m; i++) {
        memo[i] = new Array(n);
    }
    
    let dp = (i , j) => {
        if(i < 0 || j < 0 || i >= m || j >= n) return Infinity;
        if(i == m - 1) {
            return matrix[i][j];
        }
        
        if(memo[i][j]) return memo[i][j];
        
        let a1 = dp(i+1, j-1);
        let a2 = dp(i+1, j);
        let a3 = dp(i+1, j+1);
        memo[i][j] =  matrix[i][j] + Math.min(a1, Math.min(a2, a3));
        return memo[i][j];
    }
    
    let ans = Infinity;
    for(let j = 0; j < n; j++) {
        ans = Math.min(ans, dp(0, j));
    }
    return ans;
};