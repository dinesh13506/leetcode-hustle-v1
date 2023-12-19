/**
 * @param {number[][]} img
 * @return {number[][]}
 */
var imageSmoother = function(img) {
    
    let m = img.length;
    let n = img[0].length;
    let getAvg = (i,j) => {
        let sum = 0;
        let count = 0;
        for(let dx = -1; dx<= 1; dx++) {
            for(let dy = -1; dy <= 1; dy++) {
                if(i + dx >= 0 && i + dx < m && j + dy >= 0 && j + dy < n) {
                    count++;
                    sum += img[i+dx][j+dy];
                }
            }
        }
        return count > 0 ? Math.floor(sum / count) : 0;
    }
    
    let ans = [];
    for(let i = 0; i < m; i++) {
        let row = [];
        for(let j = 0; j < n; j++) {
            row.push(getAvg(i,j));
        }
        ans.push(row);
    }
    return ans;
};