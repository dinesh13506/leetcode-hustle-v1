/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    
    if( n == 0 ) return true
    
    let length = flowerbed.length
    
    
    let prev = flowerbed[0]
    let count = 0
    
    for( let i = 0; i <= length -1 ;) {
        
        let current = flowerbed[i]
        let next = -1
        if(  i + 1 <= length -1 ) {
            next = flowerbed[i + 1]
        }
        else {
            next = flowerbed[ length -1 ]
        }
        if( prev == current && current == next && current == 0 ) {
            count++
            i = i + 2
            prev = next
        }
        else {
            prev = current
            i = i + 1
        }
        if( count === n ) return true
    }
    
    return false
    
    
    
};