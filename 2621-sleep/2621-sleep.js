/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
    let init = Date.now();
    while(init + millis>=  Date.now()) {
    }
}

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */