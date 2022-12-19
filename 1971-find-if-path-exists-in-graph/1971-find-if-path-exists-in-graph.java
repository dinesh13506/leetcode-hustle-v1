class Solution {
    int[] visited;
    HashMap<Integer, ArrayList<Integer>> adjList;
    
    public void dfs(int u, int x) {
        if(visited[u] != 0) return;
        visited[u] = x;
        if(adjList.get(u) != null) {
           for(int v : adjList.get(u)) {
                if(visited[v] == 0) {
                    dfs(v, x);
                }
            } 
        }
        
        return;
    }
    
    public boolean validPath(int n, int[][] edges, int source, int destination) {
        visited = new int[n];
        adjList = new HashMap<Integer, ArrayList<Integer>>();
        for(int[] edge : edges) {
            int u = edge[0], v = edge[1];
            if(adjList.containsKey(u) == false) {
                adjList.put(u, new ArrayList<Integer>());
            }
            if(adjList.containsKey(v) == false) {
                adjList.put(v, new ArrayList<Integer>());
            }
            adjList.get(u).add(v);
            adjList.get(v).add(u);
        }
        
        int x = 0;
        for(int u = 0; u < n; u++) {
            if(visited[u] == 0) {
                x++;
                dfs(u, x);
            }
            //System.out.println(visited[u]);
        }
        return visited[source] == visited[destination];
        
    }
}