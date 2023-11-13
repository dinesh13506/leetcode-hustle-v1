
let isVowel = (ch) => {
    ch = ch.toLowerCase();
    if(['a','e','i','o','u'].includes(ch)) return true;
    return false;
}

/**
 * @param {string} s
 * @return {string}
 */
var sortVowels = function(s) {
    const n = s.length;
    //console.log(n)
    let ans = new Array(n);
    let vowels = [];
    for(let i = 0; i < n; i++) {
        let ch = s.charAt(i);
        if(isVowel(ch) == false) {
            ans[i] = ch;
        } else {
            vowels.push(ch);
            ans[i] = null;
        }
    }
    //console.log(ans, vowels)
    vowels.sort((a,b) => {
        return a.charCodeAt() - b.charCodeAt();
    });
    //console.log(vowels)
    let p1 = 0;
    let p2 = 0;
    while(p1 < n) {
        if(ans[p1] == null) {
            ans[p1] = vowels[p2];
            p2++;
        }
        p1++;
    }
    return ans.join('');
    
};