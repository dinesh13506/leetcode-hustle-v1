/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    
    g.sort((a,b) => {
        return a - b;
    });
    
    s.sort((a,b) => {
        return a - b;
    });
    
    const n1 = g.length;
    const n2 = s.length;
    let p1 = 0;
    let p2 = 0;
    while(p2 < n2) {
        if(s[p2] < g[p1]) {
            p2++;
        }
        else if(s[p2] >= g[p1]) {
            s[p2] = s[p2] - g[p1];
            p2++;
            p1++;
        }
        if(p1 >= n1) {
            break;
        }
    }
    return p1;
    
};