/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var minScore = function(n, roads) {
    
    let adjList = new Map();
    for(let u =1 ; u <= n; u++) {
        adjList.set(u, []);
    }
    for(let road of roads) {
        let u = road[0];
        let v = road[1];
        let w = road[2];
        if(adjList.has(u)) {
            adjList.get(u).push([v, w]);
            adjList.get(v).push([u, w]);
        } else {
            adjList.set(u, []);
            adjList.get(u).push([v, w]);
            adjList.get(v).push([u, w]);
        }
    }
    
    let visited = new Array(n+1);
    visited.fill(false);
    let q = new Queue();
    q.enqueue(1);
    visited[1] = true;
    let ans = Infinity;
    while(q.isEmpty() == false) {
        let u = q.dequeue();
        
        for(let [v, w] of adjList.get(u)) {
            ans = Math.min(ans, w);
            if(visited[v] == false) {
                visited[v] = true;
                q.enqueue(v);
            }
        }
    }
    return ans;
};