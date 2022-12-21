class Solution {
    HashMap<Integer, ArrayList<Integer>> adjList;
    int[] colors ;
    public boolean possibleBipartition(int n, int[][] dislikes) {
        adjList = new HashMap<>();
        colors = new int[n+1];
        for(int[] dislike : dislikes) {
            int u = dislike[0], v = dislike[1];
            if(adjList.containsKey(u) == false) {
                adjList.put(u, new ArrayList<>());
            }
            if(adjList.containsKey(v) == false) {
                adjList.put(v, new ArrayList<>());
            }
            adjList.get(u).add(v);
            adjList.get(v).add(u);
        }

        for(int u = 0; u < n; u++) {
            if(colors[u] == 0) {
                if(!bfs(u)) {
                    return false;
                }
            }
        }
        return true;
    }

    private boolean bfs(int start) {
        Queue<Integer> queue = new LinkedList<Integer>();
        queue.add(start);
        colors[start] = 1; //0 -no color, red - 1, blue - 2
        while (queue.isEmpty() == false) {
            int u = queue.poll();
            if(adjList.containsKey(u) == false) continue;
            for(int v : adjList.get(u)) {
                if(colors[v] == 0) {
                    colors[v] = colors[u] == 1 ? 2 : 1;
                    queue.add(v);
                }
                else if(colors[u] == colors[v]) {
                    return false;
                }

            }
        }
        return true;
    }
}