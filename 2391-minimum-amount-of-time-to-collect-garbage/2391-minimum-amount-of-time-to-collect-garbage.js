/**
 * @param {string[]} garbage
 * @param {number[]} travel
 * @return {number}
 */
var garbageCollection = function(garbage, travel) {
    const n = garbage.length;
    let prefixSum = new Array(n);
    let runningSum = 0;
    for(let i = 0; i < n; i++) {
        prefixSum[i] = runningSum;
        runningSum += travel[i];
    }
    console.log(prefixSum);
    let map = new Map();
    let mrange = [null, null];
    let prange = [null, null];
    let grange = [null, null];
    for(let i = 0; i < n; i++) {
        for(let ch of garbage[i].split('')) {
            let count = map.get(ch) || 0;
            map.set(ch, count + 1);
            if(ch == 'M') {
                if(mrange[0] == null || mrange[1] == null) {
                    mrange[0] = i;
                    mrange[1] = i;
                } else {
                     mrange[0] = Math.min(mrange[0], i);
                     mrange[1] = Math.max(mrange[1], i);
                }
            } else if(ch == 'P') {
                if(prange[0] == null || prange[1] == null) {
                    prange[0] = i;
                    prange[1] = i;
                } else {
                     prange[0] = Math.min(prange[0], i);
                     prange[1] = Math.max(prange[1], i);
                }
            } else if(ch == 'G') {
                if(grange[0] == null || grange[1] == null) {
                    grange[0] = i;
                    grange[1] = i;
                } else {
                     grange[0] = Math.min(grange[0], i);
                     grange[1] = Math.max(grange[1], i);
                }
            }
        }
    }
    //console.log(map, mrange, prange, grange);
    let ops = 0;
    for(let ch of map.keys()) {
        ops+= map.get(ch);
        if(ch == 'M') {
            ops+= prefixSum[mrange[0]]
            ops += prefixSum[mrange[1]] - prefixSum[mrange[0]];
        }
        else if(ch == 'P') {
            ops+= prefixSum[prange[0]]
            ops += prefixSum[prange[1]] - prefixSum[prange[0]];
        }
        else if(ch == 'G') {
            ops+= prefixSum[grange[0]]
            ops += prefixSum[grange[1]] - prefixSum[grange[0]];
        }
    }
    return ops;
};