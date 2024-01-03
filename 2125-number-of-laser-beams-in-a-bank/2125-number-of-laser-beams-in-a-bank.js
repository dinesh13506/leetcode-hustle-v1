/**
 * @param {string[]} bank
 * @return {number}
 */
var numberOfBeams = function(bank) {
    const m = bank.length;
    const n = bank[0].length;
    //console.log(m,n)
    let securityDevices = new Array(m);
    let prefixSum = new Array(m);
    prefixSum.fill(0);
    for(let i = 0; i < m; i++) {
        securityDevices[i] = [];
        let deviceCount = 0;
        for(let j = 0;  j < n; j++) {
            let ch = bank[i].charAt(j);
            if(ch == '1') {
                securityDevices[i].push(j);
                deviceCount++;
            }
        }
        prefixSum[i] =  i > 0 ? prefixSum[i-1] + deviceCount : deviceCount;
    }
    let ans = 0;
    for(let r1 = 0; r1 < securityDevices.length; r1++) {
        if(securityDevices[r1].length == 0) continue;
        for(let r2 = r1 + 1; r2 < securityDevices.length; r2++) {
            if(securityDevices[r2].length == 0) continue;
            if(r2 - r1 == 1) {
               ans = ans + (securityDevices[r1].length * securityDevices[r2].length);
                break;
            }
            else if(prefixSum[r1 + 1] == prefixSum[r2 - 1]) {
                ans = ans + (securityDevices[r1].length * securityDevices[r2].length);
                 break;
            }
        }
    }
    return ans;
};