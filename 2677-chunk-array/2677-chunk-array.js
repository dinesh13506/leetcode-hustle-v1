/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    
    let start = 0;
    let ans = [];
    while(start < arr.length) {
        let chunk = [];
        for(let j = start; j < start + size && j < arr.length; j++) {
            chunk.push(arr[j])
        }
        ans.push(chunk);
        start = start + size;
    }
    return ans;
};
