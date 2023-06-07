/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var minFlips = function(a, b, c) {
    
    let count = 0;
    while(a > 0 || b > 0 || c > 0) {
        let last_a = a & 1;
        let last_b = b & 1;
        let last_c = c & 1;
        //console.log(last_a, last_b, last_c);
        if( (last_a | last_b) != last_c) {
            if(last_c == 1) {
                if( last_a == 0 && last_b == 0)  {
                    count++;
                }
            } else {
                if( last_a == 1 && last_b == 0)  {
                    count++;
                } else if( last_a == 0 && last_b == 1)  {
                    count++;
                } else if( last_a == 1 && last_b == 1)  {
                    count = count + 2;
                }
            }
        }
        a = a >> 1;
        b = b >> 1;
        c = c >> 1;
    }
    return count;
    
};