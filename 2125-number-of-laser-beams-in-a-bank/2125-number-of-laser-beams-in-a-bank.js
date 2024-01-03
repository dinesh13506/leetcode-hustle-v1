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
        securityDevices[i] = 0;
        let deviceCount = 0;
        for(let j = 0;  j < n; j++) {
            let ch = bank[i].charAt(j);
            if(ch == '1') {
                securityDevices[i]++;
            }
        }
    }
    let ans = 0;
    for(let r1 = 0; r1 < securityDevices.length; r1++) {
        if(securityDevices[r1] == 0) continue;
        for(let r2 = r1 + 1; r2 < securityDevices.length; r2++) {
            if(securityDevices[r2] == 0) continue;
            ans = ans + (securityDevices[r1] * securityDevices[r2]);
            break;
        }
    }
    return ans;
};