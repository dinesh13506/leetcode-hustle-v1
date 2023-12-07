/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function(num) {
    let firstOdd = null;
    let firstEven = null;
    let lastOdd = null;
    for(let i = 0; i < num.length; i++) {
        let d = parseInt(num.charAt(i));
        if(d & 1) {
            if(firstOdd == null) {
                firstOdd = i;
            }
            lastOdd = i;
        } else {
            if(firstEven == null && d > 0) {
                firstEven = i;
            }
        }
    }
    let str1 = "";
    if(firstOdd != null && lastOdd != null) {
       for(let p1 = firstOdd; p1 <= lastOdd; p1++) {
            str1 += num.charAt(p1);
        } 
    }
    let str2 = "";
    if(firstEven != null && lastOdd != null) {
       for(let p1 = firstEven; p1 <= lastOdd; p1++) {
         str2 += num.charAt(p1);
       } 
    }
    return str1.length > str2.length ? str1 : str2;
    
};