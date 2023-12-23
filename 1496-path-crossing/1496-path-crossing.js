/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function(path) {
    
    
    let map = {}
    
    let x = 0
    let y = 0
    map[[0,0]] = true
    for( let p of path ) {
        
        //console.log(map)
        if( p == 'N') {
            x = x 
            y = y + 1
        }
        else if( p == 'S') {
            x = x
            y = y -1
        }
        else if( p == 'E') {
            x = x + 1
            y = y
        }
        else if( p == 'W') {
            x = x - 1
            y = y
        }
        
        let key = [x,y]
        if( map[key] ){
            return true
        }
        
        map[key] = true
    }
    
    return false
    
    
};