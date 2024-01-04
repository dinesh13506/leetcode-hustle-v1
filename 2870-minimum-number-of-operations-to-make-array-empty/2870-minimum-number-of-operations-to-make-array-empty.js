/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    
    let map = new Map();
    for(let num of nums) {
        let count = map.get(num) || 0;
        map.set(num, count + 1);
    }
    //console.log(map)
    let size = nums.length;
    let ops = 0;
    for(let key of map.keys()) {
        let count = map.get(key);
        
        if(count == 1) return -1;
        if(count % 3 == 0) {
            ops += count /  3;
        }
        else {
            ops += parseInt(count / 3) + 1;
        }
    }
    
    return ops;
};

