/**
 * @param {string[]} words
 * @return {boolean}
 */
var makeEqual = function(words) {
    const n = words.length;
    let count = new Map();
    for(let i = 0; i < n; i++) {
        for(let ch of words[i]) {
            let c = count.get(ch) || 0;
            c++;
            count.set(ch, c);
        }
    }
    let keys = count.keys(); 
    for(let ch of keys) {
        if(count.get(ch) % n != 0) {
            return false;
        }
    }
    return true;
};