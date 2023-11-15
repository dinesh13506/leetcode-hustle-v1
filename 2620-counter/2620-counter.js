/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    let last = n-1;
    return function() {
         let ans = last + 1;
         last = last + 1;
         return ans;
    };
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */