/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
    
    let p1 = 0;
    let p2 = 0;
    let i = 0; 
    let j = 0;
    const n1 = word1.length;
    const n2 = word2.length;
    while(p1 < n1 || p2 < n2) {
        if(i >= word1[p1].length) {
            p1++;
            i = 0;
        }
        if(j >= word2[p2].length) {
            p2++;
            j = 0;
        }
        if(p1 >= n1 || p2 >= n2) {
            break;
        }
        if(word1[p1].charAt(i) != word2[p2].charAt(j)) {
            return false;
        }
        i++;
        j++;
    }
    return p1>= n1 && p2>= n2 ? true : false;;
};