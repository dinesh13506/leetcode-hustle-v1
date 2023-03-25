/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countPairs = function(n, edges) {
    
    let adjcencyList = new Map()
    for(let i = 0; i < n; i++) {
        adjcencyList.set(i, [])
    }
    for(let edge of edges) {
        let [u,v] = edge
        adjcencyList.get(u).push(v)
        adjcencyList.get(v).push(u)
    }
    //console.log(adjcencyList)
    let visited = new Array(n)
    visited.fill(false)
    let component = new Array(n)
    
    
    let dfs = function(s,compid) {
        visited[s] = true
        component[s] = compid
        let neighbours = adjcencyList.get(s)
        for(let neigh of neighbours) {
            if(visited[neigh] == false) {
                dfs(neigh,compid)
            }
        }
    }
    
    let id = 0
    let ids = []
    for(let i = 0; i < n; i++) {
        if(visited[i] == false) {
           id++
           ids.push(id)
           dfs(i,id) 
        }
    }
    //console.log(id,ids)
    //console.log(component)
    let map = new Map()
    for(let id of component) {
        map.set(id, (map.get(id) || 0) + 1)
    }
    //console.log(n,map,ids)
    let ans = 0
    let total = (n * ( n - 1)/2)
    for(let id of ids) {
        let x = map.get(id)
        total = total - (x * (x-1)/2)
    }
    return total
};