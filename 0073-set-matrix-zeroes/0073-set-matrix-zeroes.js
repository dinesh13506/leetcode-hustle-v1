/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    
    const m = matrix.length;
    const n = matrix[0].length;
    
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(matrix[i][j] == 0) {
                let c = 0;
                while(c < n) {
                    if(matrix[i][c] != 0) {
                        matrix[i][c] = null;
                    }
                    c++;
                }
                let r = 0;
                while( r < m) {
                    if(matrix[r][j] != 0) {
                        matrix[r][j] = null;
                    }
                    r++;
                }
            }
        }
    }
    //console.log(matrix)
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(matrix[i][j] == null) matrix[i][j] = 0;
        }
    }
};