/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    
    let max = candies[0]
    let length = candies.length
    for( let i = 1; i < length; i++ ) {
        max = ( candies[i] > max ) ? candies[i] : max
    }
    
    const result = []
    for( let i = 0; i < length; i++ ) {
        if( candies[i] + extraCandies >= max ) {
            result.push( true)
        }
        else {
            result.push( false )
        }
    }
    return result
    
};