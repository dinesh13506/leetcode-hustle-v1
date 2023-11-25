/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
    
    let ans = [];
    let map = new Map();
    for(let i = 0; i < this.length; i++) {
        let key = fn(this[i]);
        if(map.has(key)) {
            map.get(key).push(this[i]);
        } else {
            map.set(key, []);
            map.get(key).push(this[i]);
        }
        
    }
    //console.log(map)
    let obj = {};
    for(let k of map.keys()) {
        obj[k] = map.get(k);
        ans.push(obj)
    }
    return obj;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */