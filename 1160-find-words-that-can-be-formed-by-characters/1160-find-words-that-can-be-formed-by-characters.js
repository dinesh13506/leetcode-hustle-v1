/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
    
    let sum = 0;
    for(let word of words) {
        let map = new Map();
        for(let ch of chars) {
            map.set(ch, (map.get(ch) || 0) + 1);
        }
        let len = word.length;
        for(let ch of word) {
            if(map.has(ch) && map.get(ch) > 0) {
                map.set(ch, map.get(ch) -1);
            } else {
                len = 0;
                break;
            }
        }
        sum += len;
    }
    return sum;
};