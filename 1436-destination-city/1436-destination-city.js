/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
    
    let map = new Map();
    for(let path of paths) {
        if(map.has(path[0])) {
            map.set(path[0], map.get(path[0]) + 1);
        } else {
            map.set(path[0], 1);
        }
    }
    for(let path of paths) {
        if(map.has(path[1]) == false) {
            return path[1];
        }
    }
    
};