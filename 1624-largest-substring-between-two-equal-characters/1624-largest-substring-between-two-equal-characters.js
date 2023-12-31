/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function(s) {
    
    let length = s.length
    let map_arr = new Array( 26 )
    
    for( let i = 0 ; i< 26; i++) {
        map_arr[i] = []
    }
    
    for( let i = 0; i < s.length; i++ ) {
        let ch = s[i]
        let asc = ch.charCodeAt()
        let index= asc - 97 
        if( map_arr[index] ) {
            map_arr[index].push(i)
        } else {
            map_arr[index] = []
            map_arr[index].push(i)
        }
    }
    
    
    let res = -1
    for( let i = 0; i < 26; i++) {
        if( map_arr[i]) {
            let index_arr = map_arr[i]
            if( index_arr.length >= 1 ) {
                let first = index_arr[0]
                let last = index_arr[ index_arr.length - 1]
                res = Math.max( res, last-first-1)
            }
        }
    }
    
    return res
};