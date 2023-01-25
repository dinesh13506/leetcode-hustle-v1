class Solution {
    HashMap<Integer, ArrayList<Integer>> adjList;
    public void bfs(int start, int[] d, int n) {
        for(int i = 0; i < n; i++) {
            d[i] = Integer.MAX_VALUE;
        }
        boolean[] visited = new boolean[n];
        LinkedList<Integer> queue = new LinkedList<Integer>();
        d[start] = 0;
        queue.add(start);
        visited[start] = true;
        while(queue.isEmpty() == false) {
            int node = queue.pollFirst();
            if(adjList.containsKey(node)) {
                for(int v : adjList.get(node)) {
                    if(visited[v] == false) {
                        d[v] = Math.min(d[v], 1 + d[node]);
                        queue.add(v);
                        visited[v] = true;
                    }
                }
            }
        }
    }
    public int closestMeetingNode(int[] edges, int node1, int node2) {
        int n = edges.length;
        adjList = new HashMap<>();
        for(int u = 0; u < n; u++) {
            if(adjList.containsKey(u) == false) {
                adjList.put(u, new ArrayList<Integer>());
            }
            if(edges[u] == -1 ) {
                continue;
            }
            adjList.get(u).add(edges[u]);
        }
        int[] d1 = new int[n];
        int[] d2 = new int[n];
        bfs(node1, d1, n);
        bfs(node2, d2, n);
        int ans = -1;
        int diff = Integer.MAX_VALUE;
        for(int i = 0; i < n; i++) {
            int max = Math.max(d1[i], d2[i]);
            if(max < diff) {
                ans = i;
                diff = max;
            }
        }
        return ans;
    }
}