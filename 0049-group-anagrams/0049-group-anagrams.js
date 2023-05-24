/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    
    const map = new Map()
    const n = strs.length
    for(let i = 0 ; i < n; i++) {
        let key = strs[i].split("").sort().join('');
        if(map.has(key) == false) {
            map.set(key, []);
            map.get(key).push(strs[i]);
        } else {
            map.get(key).push(strs[i]);
        }
    }
    
    let answer = []
    for(let key of map.keys()) {
        answer.push(map.get(key))
    }
    return answer
};