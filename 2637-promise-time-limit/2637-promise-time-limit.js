/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function(fn, t) {
    
	return async function(...args) {
        return new Promise((resolve, reject) => {
            let res;
            let start = Date.now();
            fn(...args).then(result => {
                res = result;
                return resolve(res);
            }).catch(err => {
                return reject(err);
            });
            setTimeout(() => {
                return reject("Time Limit Exceeded")
            }, t); 
        })
        
    }
};

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */