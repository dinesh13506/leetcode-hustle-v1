/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findMatrix = function(nums) {
    
    let result = [];
    let count = new Map();
    let size = nums.length;
    for(let num of nums) {
        if(count.has(num)) {
            count.set(num, count.get(num) + 1);
        } else {
            count.set(num, 1);
        }
    }
    //console.log(count, size);
    while(size > 0) {
        let arr = [];
        for(let key of count.keys()) {
            if(count.get(key) > 0) {
                arr.push(key);
                count.set(key, count.get(key) - 1);
                size--;
            }
        }
        if(arr.length > 0) {
            result.push(arr);
        }
    }
    return result;
};