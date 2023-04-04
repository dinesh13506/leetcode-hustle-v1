/**
 * @param {string} s
 * @return {number}
 */
var partitionString = function(s) {
    
    let count = 0
    let set = new Set()
    for(let ch of s) {
        if(set.has(ch) == false) {
            set.add(ch)
        } else {
             count++
             set = new Set()
             set.add(ch)
        }
    }
    if(set.size) count++
    return count
};