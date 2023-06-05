/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coordinates) {
    
    const n = coordinates.length;
    coordinates.sort((a,b) => {
        if(a[0] == b[0]) return a[1] - b[1];
        return a[0] - b[0];
    });
    //console.log(coordinates);

    let set = new Set();
    for(let i = 0; i < n; i++) {
        for(let j = i + 1; j < n; j++) {
            
            let slope = (coordinates[j][1] - coordinates[i][1]) / (coordinates[j][0] - coordinates[i][0]);
            //console.log(slope);
            set.add(slope);
            if(set.size > 1) return false;
        }
    }
    return true;
};