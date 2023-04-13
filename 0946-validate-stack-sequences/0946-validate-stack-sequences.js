/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
    
    let i = 0
    let j = 0 
    let length = popped.length
    for(let x of pushed) {
        pushed[i] = x
        while(i >=0 && j <length && pushed[i] === popped[j]) {
            i--
            j++
        }
        i++
    }
    
    return i <= 0
};