/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    
    const m = matrix.length;
    const n = matrix[0].length;
    const value =  (Math.pow(2, 31) -1) + 1
    
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(matrix[i][j] == 0) {
                let c = 0;
                while(c < n) {
                    if(matrix[i][c] != 0) {
                        matrix[i][c] = value;
                    }
                    c++;
                }
                let r = 0;
                while( r < m) {
                    if(matrix[r][j] != 0) {
                        matrix[r][j] = value;
                    }
                    r++;
                }
            }
        }
    }
    //console.log(matrix)
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(matrix[i][j] == value) matrix[i][j] = 0;
        }
    }
};