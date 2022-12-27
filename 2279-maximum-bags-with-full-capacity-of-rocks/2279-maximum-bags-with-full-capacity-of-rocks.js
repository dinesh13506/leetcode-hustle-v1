/**
 * @param {number[]} capacity
 * @param {number[]} rocks
 * @param {number} additionalRocks
 * @return {number}
 */
var maximumBags = function(capacity, rocks, additionalRocks) {
    let n = capacity.length
    let diff = [], max = 0
    for(let i = 0; i < n; i++) {
        diff[i] = capacity[i] - rocks[i]
    }
    diff.sort(function(a,b) {
        return a - b
    })
    
    //console.log(diff)
    
    for(let i = 0; i < n; i++) {
        if(diff[i] == 0) {
            max++
            continue
        }
        if(additionalRocks >= diff[i]) {
            max++
            let currDiff = diff[i]
            diff[i] = diff[i] - Math.min(diff[i], additionalRocks)
            additionalRocks = additionalRocks - currDiff
            //console.log(currDiff, additionalRocks)
        }
    }
    return max
    
};