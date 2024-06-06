/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
    let ans = [];
    for(let j = 0; j < 26; j++) {
        let min = Infinity;
        for(let i = 0; i < words.length; i++) {
            let count = 0;
            for(let ch of words[i]) {
                if(ch.charCodeAt(0) - 97 == j) {
                    count++;
                }
            }
            min = Math.min(min, count);
        }
        while(min > 0) {
            ans.push(String.fromCharCode(j + 97));
            min--;
        }
        
    }
    return ans;
    
};