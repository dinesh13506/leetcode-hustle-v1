/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(word1, word2) {
    let map1 = new Map();
    let map2 = new Map();
    let count = new Map();
    for(let ch of word1){
        map1.set(ch, map1.get(ch) ? map1.get(ch) + 1 : 1);
    }
    for(let ch of word2){
        if(map1.has(ch) == false) return false;
        map2.set(ch, map2.get(ch) ? map2.get(ch) + 1 : 1);
    }
    
    //console.log(map1, map2)
    for(let ch of map1.keys()){
        if(map1.get(ch) == map2.get(ch)) continue;
        if(count.has(map1.get(ch))) {
            count.set(map1.get(ch), count.get(map1.get(ch)) + 1);
        } else {
            count.set(map1.get(ch),1);
        }
    }
     //console.log(count)
    for(let ch of map2.keys()){
        if(map1.get(ch) == map2.get(ch)) continue;
        if(count.has(map2.get(ch))) {
            count.set(map2.get(ch), count.get(map2.get(ch)) - 1);
        } else {
            count.set(map2.get(ch),-1);
        }
    }
    //console.log(count)
    for(let k of count.keys()) {
        if(count.get(k) != 0) return false;
    }
    return true;
};