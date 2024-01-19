/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function(matrix) {
    let n = matrix.length;

    let memo = new Array(n);
    for(let i = 0; i < n; i++) {
        memo[i] = new Array(n);
        memo[i].fill(null);
    }
    let dp = (i, j) => {
        if(i < 0 || i >= n || j < 0 || j >=n) return Infinity;
        if(i == 0) return matrix[i][j];
        if(memo[i][j] != null) return memo[i][j];
        let top = matrix[i][j] + dp(i-1,j);
        let left =  matrix[i][j] + dp(i-1,j-1);
        let right = matrix[i][j] + dp(i-1,j+1);
        memo[i][j] =  Math.min(top, Math.min(left, right));
        return memo[i][j];
    }

    let ans = Infinity;
    for(let j = 0; j < n; j++) {
        ans = Math.min(ans, dp(n-1, j));
    }
    return ans;
};