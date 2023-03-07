/**
 * @param {number[]} time
 * @param {number} totalTrips
 * @return {number}
 */
var minimumTime = function(time, totalTrips) {
    
    let total = 0;
    for(let t of time) {
        total += t;
    }
    
    let canMake = (givenTime) => {
        let trips = 0;
        for(let t of time) {
            trips += parseInt(givenTime / t);
        }
        return trips >= totalTrips;
    }
    
    
    let start = 0;
    let end = totalTrips * total;
    let ans = totalTrips * total;
    while(start <= end) {
        let mid = start + parseInt((end - start) / 2);
        if(canMake(mid)) {
            //console.log("mid = ", mid)
            ans = mid < ans ? mid : ans;
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return ans;
};