/**
 * @param {number[][]} points
 * @return {number}
 */
var maxWidthOfVerticalArea = function(points) {
    
    points.sort((a,b) => {
        if(a[0] == b[0]) return a[1] - b[1];
        return a[0] - b[0];
    });
    let ans = 0;
    let prev = points[0];
    for(let i = 1; i < points.length; i++) {
        if(points[i][0] > prev[0]) {
            ans = Math.max(ans, points[i][0] - prev[0]);
            prev = points[i];
        }
    }
    return ans;
};