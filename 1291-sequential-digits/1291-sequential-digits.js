/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var sequentialDigits = function(low, high) {
    let ans = [];
    for(let start = 1;  start <= 8; start++) {
        let temp = start;
        let last = start;
        if(temp >= low && temp <= high) ans.push(temp);
        while(temp <= high && last <= 8) {
            //console.log(temp);
            temp = temp * 10 + (last  + 1);
            if(temp >= low && temp <= high) ans.push(temp);
            last = last + 1;
        }
    }
    return ans.sort((a,b) => { return a - b});
};