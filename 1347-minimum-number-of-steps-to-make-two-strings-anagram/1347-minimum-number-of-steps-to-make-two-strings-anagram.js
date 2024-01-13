/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function(s, t) {
    
    
    let map = new Map()
    
    
    for( let ch of s ) {
        if( map.has(ch) ) {
            map.set( ch, map.get(ch) + 1 )
        }
        else{
            map.set(ch , 1 ) 
        }
    }
    
    for( let ch of t ) {
        if( map.has(ch) ) {
            map.set( ch, map.get(ch) - 1 )
        }
        else{
            map.set(ch , -1 ) 
        }
    }
    
    //console.log( map )
    
    let sum = 0
    
    for( let [key, value] of map.entries(  ) ) {
        sum += Math.abs(value ) 
    }
    
    //console.log( sum )
    return parseInt( sum / 2 )
};