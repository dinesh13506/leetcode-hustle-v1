/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    
    
    let length = chars.length
    
    let index = 0
    let p = 0
    while( index < length ) {
        
        let current_char = chars[ index ]
        let count = 0
        while( index < length && current_char == chars[index ] ) {
            count++
            index++
        }
        chars[p++] = current_char
        if( count > 1) {
            let str = count.toString()
            for( ch of str){
                chars[p++] = ch
            }
        }
        
    }
    //console.log(chars)
    //console.log(p)
    return p
    
};