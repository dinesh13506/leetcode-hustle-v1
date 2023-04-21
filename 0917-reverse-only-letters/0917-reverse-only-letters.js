/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function(s) {
    let sarr = s.split('');
    
    let englishLetters = [];
    
    for(let ch of sarr) {
        if( (ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z')) {
            englishLetters.push(ch);
        }
    }
    
    let p1 = 0, p2 = englishLetters.length - 1;
    while(p1 < p2) {
        let temp = englishLetters[p1];
        englishLetters[p1] = englishLetters[p2];
        englishLetters[p2] = temp;
        p1++;
        p2--;
    }
    //console.log(englishLetters);
    
    let p = 0;
    for(let i = 0; i < sarr.length; i++) {
        let ch = sarr[i];
        if( (ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z')) {
            sarr[i] = englishLetters[p];
            p++;
        }
        
    }
    
    //console.log(sarr);
    return sarr.join('');
    
};