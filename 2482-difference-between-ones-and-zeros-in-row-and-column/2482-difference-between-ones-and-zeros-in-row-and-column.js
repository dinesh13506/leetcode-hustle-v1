/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var onesMinusZeros = function(grid) {
    let m = grid.length;
    let n = grid[0].length;
    let onesR = new Array(m);
    let onesC = new Array(n);
    onesR.fill(0);
    onesC.fill(0);
    
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(grid[i][j] == 1) {
                onesR[i]++;
                onesC[j]++;
            } else {
                onesR[i]--;
                onesC[j]--;
            }
        }
    }
    
    let diff = new Array(m);
    for(let i = 0; i < m; i++) {
        diff[i] = new Array(n);
        diff[i].fill(0);
    }
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            diff[i][j] = onesR[i] + onesC[j];
        }
    }
    return diff;
};