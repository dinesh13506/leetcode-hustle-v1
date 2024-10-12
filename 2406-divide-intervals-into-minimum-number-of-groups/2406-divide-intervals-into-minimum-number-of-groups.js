var minGroups = function(intervals) {
    
    const modifiedIntervals = intervals.flatMap((interval) => {
        return [[interval[0], 1], [interval[1] + 1, -1]];
    });
    //console.log(modifiedIntervals);
    modifiedIntervals.sort((a,b) => {
        if(a[0] == b[0]) {
            return a[1] - b[1];
        }
        return a[0] - b[0];
    });
    //console.log(modifiedIntervals);

    let ans = 0;
    let sum = 0;
    for(let interval of modifiedIntervals) {
        sum += interval[1];
        ans = Math.max(ans, sum);
    }
    return ans;
    
};