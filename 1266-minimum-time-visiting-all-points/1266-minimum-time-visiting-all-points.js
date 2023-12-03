/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function(points) {
    let ans = 0;
    for(let i = 0; i < points.length - 1; i++) {
        let [x,y] = points[i];
        let [a,b] = points[i+1];
        ans += Math.max(Math.abs(a-x),Math.abs(b-y));
    }
    return ans;
};