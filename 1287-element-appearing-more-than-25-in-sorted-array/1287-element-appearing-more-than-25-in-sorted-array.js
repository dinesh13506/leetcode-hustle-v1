/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function(arr) {
    
    const n = arr.length;
    const exp = Math.ceil(0.25 * n);
    let count = 1;
    let prev = arr[0];
    let max = 1;
    let ans = prev;
    for(let i = 1; i < n; i++) {
        if(prev == arr[i]) {
            count++;
            if(count > max) {
                 ans = arr[i];
                 max = count;
            }
        } else {
            if(count >= max) {
                ans = prev;
                max = count;
            }
            count = 1;
            prev = arr[i];
        }
        
    }
    //console.log(max, exp, ans)
    if(max >= exp) return ans;
};