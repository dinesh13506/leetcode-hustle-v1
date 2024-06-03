/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var appendCharacters = function(s, t) {
    
    const m = s.length;
    const n = t.length;
    let fun = (i, j) => {
       while(i < m && j < n) {
           if(s.charAt(i) == t.charAt(j)) {
               i++;
               j++;
           } else {
               i++;
           }
       }
       if(j < n) {
           return n - j;
       } else {
           return 0;
       }
    }
    return fun(0,0);
    
}