/**
 * @param {string} customers
 * @return {number}
 */
var bestClosingTime = function(customers) {
    
    let str = customers.split('');
    const n = str.length;
    let leftNs = new Array(n+1);
    let rightYs = new Array(n+1);
    
    let count = 0;
    // for(let i = 0; i <= n ; i++) {
    //     leftNs[i] = count;
    //     if(i < n) {
    //         count = str[i] == 'N' ? count + 1 : count;
    //     }
    // }
    //console.log(leftNs);
    count = 0;
    for(let i = n; i >= 0; i--) {
        rightYs[i] = count;
        if(i < n && i >= 0) {
            count = str[i] == 'Y' ? count + 1 : count;
        }
    }
    //console.log(rightYs);
    let ans = Number.MAX_VALUE;
    let penality = n + 1;
    count = 0;
    for(let i = 0; i <= n; i++) {
        let p = 0;
        p = p + count;
        p = p + rightYs[i];
        if(i >= 0 && i < n) {
            p = str[i] == 'Y' ? p + 1 : p;
        }
        
        if( p < penality) {
            penality = p;
            ans = i;
        }
        if(i < n) {
            count = str[i] == 'N' ? count + 1 : count;
        }
    }
    return ans;
    
};