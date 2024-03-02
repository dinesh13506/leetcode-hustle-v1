/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    let minPq = new MinPriorityQueue({priority : (value) => value});
    for(let num of nums) {
        minPq.enqueue(num, num);
    }
    let ops = 0;
    while(minPq.size() >= 2) {
        if(minPq.front().element >= k) {
            break;
        }
        let x = minPq.dequeue().element;
        let y = minPq.dequeue().element;
        //console.log(x,y);
        minPq.enqueue(Math.min(x, y) * 2 + Math.max(x, y),Math.min(x, y) * 2 + Math.max(x, y));
        ops++;
    }
    return ops;
};