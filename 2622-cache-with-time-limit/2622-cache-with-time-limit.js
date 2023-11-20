
var TimeLimitedCache = function() {
     this.store = {}
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
    if(this.store[key]) {
        this.store[key].value = value;
        clearTimeout( this.store[key].timer);
        this.store[key].timer = setTimeout(() => {
            delete this.store[key];
        }, duration);
        return true;
    } else {
         this.store[key] = {};
         this.store[key].value = value;
         this.store[key].timer = setTimeout(() => {
            delete this.store[key];
         }, duration);
        return false;
    }
    
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
    if(this.store[key]) {
        return this.store[key].value
    }
    return -1;
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
    return Object.keys(this.store).length;
};

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */