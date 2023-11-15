/**
 * @param {number[]} arr
 * @return {number}
 */
var maximumElementAfterDecrementingAndRearranging = function(arr) {
    arr.sort((a,b) => {return a - b});
    //console.log(arr);
    arr[0] = 1;
    let n = arr.length;
    for(let i = 1; i < n; i++) {
        let curr = arr[i];
        let prev = arr[i-1];
        if(Math.abs(curr - prev) <= 0) {
            continue;
        } else {
            arr[i] = arr[i-1] + 1;
        }
    }
    return arr[n-1];
};