/**
 * @param {string} s
 * @return {number}
 */
var countPalindromicSubsequence = function(s) {
    
    const n = s.length;
    let ans = 0;
    
    let firstIndex = new Array(26);
    let lastIndex = new Array(26);
    for(let i = 0; i < 26; i++) {
        firstIndex[i] = null;
        lastIndex[i] = null;
    }
    
    for(let j = 0; j < n; j++) {
        let ch = s.charAt(j);
        let index = ch.charCodeAt(0) - 'a'.charCodeAt(0);
        if(firstIndex[index] == null) {
            firstIndex[index] = j;
        }
        lastIndex[index] = j;
    }
    for(let j = 0; j < 26; j++) {
        if(firstIndex[j] != null && lastIndex[j] != null) {
            let set = new Set();
            for(let k = firstIndex[j] + 1; k < lastIndex[j] ; k++) {
                set.add(s.charAt(k));
            }
            ans += set.size;
        }
    }
    return ans;
};