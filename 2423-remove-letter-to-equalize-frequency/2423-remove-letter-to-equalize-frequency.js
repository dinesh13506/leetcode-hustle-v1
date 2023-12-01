/**
 * @param {string} word
 * @return {boolean}
 */
var equalFrequency = function(word) {
    let freq = new Array(26);
    freq.fill(null);
    for(let ch of word) {
        let i = ch.charCodeAt() - 'a'.charCodeAt();
        if(freq[i] == null) {
            freq[i] = 0;
        }
        freq[i]++;
    } 
    //console.log(freq);
    let fail = 0;
    for(let i = 0; i< 26; i++) {
        if(freq[i] > 0) {
            freq[i] = freq[i] - 1;
            let set = new Set();
            for(let j = 0; j < 26; j++) {
                if(freq[j])
                    set.add(freq[j]);
            }
            if(set.size == 1) return true;
            else { fail++; freq[i]++; }
        } else {
            fail++;
        }
    }
    return fail == 26 ? false : true;
    
    
    
};