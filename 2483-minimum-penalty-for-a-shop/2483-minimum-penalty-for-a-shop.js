/**
 * @param {string} customers
 * @return {number}
 */
var bestClosingTime = function(customers) {
    
    const n = customers.length;
    let rightYs = new Array(n+1);
    let count = 0;
    count = 0;
    for(let i = n; i >= 0; i--) {
        rightYs[i] = count;
        if(i < n && i >= 0) {
            count = customers.charAt(i) == 'Y' ? count + 1 : count;
        }
    }
    //console.log(rightYs);
    let ans = n+1;
    let penality = n + 1;
    count = 0;
    for(let i = 0; i <= n; i++) {
        let p = 0;
        p += count;
        p += rightYs[i];
        if(i >= 0 && i < n) {
            p = customers.charAt(i) == 'Y' ? p + 1 : p;
        }
        if( p < penality) {
            penality = p;
            ans = i;
        }
        if(i < n) {
            count = customers.charAt(i) == 'N' ? count + 1 : count;
        }
    }
    return ans;
    
};