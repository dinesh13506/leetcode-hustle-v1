/**
 * @param {number[]} arr
 * @param {number[][]} mat
 * @return {number}
 */
var firstCompleteIndex = function(arr, mat) {
    const m = mat.length;
    const n = mat[0].length;
    const l = arr.length;
    let ans = Infinity;
    let rowCount = new Array(m);
    rowCount.fill(0);
    let colCount = new Array(n);
    colCount.fill(0);
    
    let map = new Map();
    for(let r= 0; r < m; r++) {
        for(let c = 0; c <n ;c++) {
            map.set(mat[r][c], [r,c]);
        }
    }
    
    for(let i = 0; i < l; i++) {
        let loc = map.get(arr[i]);
        let r = loc[0];
        let c = loc[1];
        rowCount[r]++;
        colCount[c]++;
        if(rowCount[r] == n) {
            return i;
        }
        if(colCount[c] == m) {
            return i;
        }
    }
};