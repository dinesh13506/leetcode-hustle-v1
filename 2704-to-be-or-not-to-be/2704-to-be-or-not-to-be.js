/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    
    let toBe = (val2) => {
        if(val === val2) {
            return true;
        }
        throw "Not Equal"
    }
    
    let notToBe = (val2) => {
        if(val !== val2 ) return true 
        throw "Equal"
    }
    
    return {toBe , notToBe}
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */