/**
 * @param {string[]} words
 * @return {boolean}
 */
var makeEqual = function(words) {
    const n = words.length;
    let temp = words.join('');
    let count = new Map();
    for(let ch of temp) {
        let c = count.get(ch) || 0;
        c++;
        count.set(ch, c);
    }
    for(let ch of count.keys()) {
        if(count.get(ch) % n != 0) {
            return false;
        }
    }
    return true;
};