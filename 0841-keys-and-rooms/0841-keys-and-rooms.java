
class Solution {
    int[] visited;
    HashMap<Integer, ArrayList<Integer>> adjList;
    
    public void dfs(int u) {
        if(visited[u] != 0) return;
        visited[u] = 1;
        
        for(int v : adjList.get(u)) {
            if (visited[v] == 0) {
                dfs(v);
            }
        }
        return;
    }
    
    public boolean canVisitAllRooms(List<List<Integer>> rooms) {
        final int n = rooms.size();
        visited = new int[n];
        adjList = new HashMap<>();
        for(int i = 0; i < rooms.size(); i++) {
            if(adjList.containsKey(i) == false) {
                adjList.put(i, new ArrayList<>());
            }
            for(int key : rooms.get(i)) {
                adjList.get(i).add(key);
            }
        }
        
        dfs(0);
        for (int i = 0; i < n; i++) {
            if(visited[i] == 0) return false;
        }
        
        return true;
    }
}