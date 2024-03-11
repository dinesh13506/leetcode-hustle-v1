/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function(order, s) {
    let output = [];
    let value = 0;
    const map = new Map();
    for(let i = 0; i < s.length; i++){
        if(map.has(s[i])){
            map.set(s[i], map.get(s[i]) + 1);
        } else {
            map.set(s[i], 1);
        }
        
    }
    
    for(let i = 0; i < order.length; i++){
        if(map.has(order[i])){
            value = map.get(order[i]);
            
            while(value != 0){
                output.push(order[i]);
                value--;
            }
            
            map.delete(order[i]);
        }
    }

    for(let key of map.keys()){
            value = map.get(key);
            
            while(value != 0){
                output.push(key);
                value--;
            }
            
            map.delete(key);
    }

    return output.join('');

};