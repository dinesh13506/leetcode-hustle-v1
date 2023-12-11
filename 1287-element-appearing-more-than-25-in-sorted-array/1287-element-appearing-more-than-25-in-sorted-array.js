/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function(arr) {
    
    const n = arr.length;
    const exp = Math.ceil(0.25 * n);
    let op = [];
    let count = 0;
    let prev = -1
    for(let i = 0; i < n; i++) {
        if(arr[i] == prev) {
            op[op.length-1].count++;
        } else {
            op.push({
                count : 1,
                val : arr[i]
            });
            prev = arr[i];
        }
    }
    
    op.sort((a,b) => { return b.count - a.count});
    //console.log(op, exp)
    for(let i = 0; i < op.length; i++) {
        console.log(op[i].count >= exp)
        if(op[i].count >= exp) return op[i].val;
    }
};