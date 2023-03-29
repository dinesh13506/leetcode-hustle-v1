/**
 * @param {number} n
 * @return {number[]}
 */
var evenOddBit = function(n) {
    
    let bin = [];
    while(n > 0) {
        bin.push(n % 2);
        n = parseInt(n/2);
    }
    //console.log(bin);
    let len = bin.length;
    let even = 0;
    let odd = 0;
    for(let i = 0; i < len; i++) {
        if( (i & 1) == 0) {
            if(bin[i] == 1) even++;
        } else {
            if(bin[i] == 1) odd++;
        }
    }
    return [even, odd];
};