/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
var isNStraightHand = function(hand, groupSize) {
    const n = hand.length;
    let map = new Map();
    let count = 0;
    hand.sort((a,b) => {
        return a - b;
    })
    for(let i = 0; i < n; i++) {
        if(map.has(hand[i]) == false) {
            map.set(hand[i] , 1);
        } else {
             map.set(hand[i], map.get(hand[i]) + 1);
        }
    }
    //console.log(map);
    
    for(let i = 0; i < n; i++) {
        if(map.get(hand[i])) {
            let count = 1;
            let start = hand[i];
            while(count < groupSize && map.get(start + 1)) {
                count++;
                start = start + 1;
            }
            if(count == groupSize) {
                for(let j = hand[i]; j < hand[i] + groupSize; j++) {
                    map.set(j, map.get(j) - 1);
                }
            } else {
                return false;
            }
        } else {
            continue;
        }
        
    }
    //console.log(map)
    for(let i = 0; i < n; i++) {
        if(map.get(hand[i])) return false;
    }
    return true;
    
};