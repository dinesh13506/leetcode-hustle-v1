/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function(matches) {
    let n = matches.length;
    let win = new Map();
    let lose = new Map();
    let min = 10^5, max = 1;
    for(let match of matches) {
        let w = match[0], l = match[1];
        win.set(w, (win.get(w) || 0) + 1);
        lose.set(l, (lose.get(l) || 0) + 1);
        min = Math.min(min, Math.min(l, w));
        max = Math.max(max, Math.max(l, w));
    }
    //console.log(lose, min, max)
    let ans =[new Set(),new Set()];
    for(let match of matches) {
        let p1 = match[0];
        let p2 = match[1];
        if(!lose.get(p1)) {
            ans[0].add(p1);
        }
        if(lose.get(p1) == 1) {
             ans[1].add(p1);
        }
        if(!lose.get(p2)) {
            ans[0].add(p2);
        }
        if(lose.get(p2) == 1) {
             ans[1].add(p2);
        }
    }
    return [[...ans[0]].sort((a,b) => { return a -b }), [...ans[1]].sort((a,b) => { return a -b })];
};