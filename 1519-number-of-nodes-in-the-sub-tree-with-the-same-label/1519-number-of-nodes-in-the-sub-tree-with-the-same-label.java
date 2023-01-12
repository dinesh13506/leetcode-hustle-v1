class Solution {
    HashMap<Integer, ArrayList<Integer>> alist;
    boolean[] visited;
    int[] ans;
    
    public int[] dfs(int parent, int u, String labels) {
        int[] count = new int[26];
        count[labels.charAt(u) - 'a']++;
        visited[u] = true;
        if(alist.get(u) != null) {
            for(int v : alist.get(u)) {
                if(v == parent || visited[v]) continue;
                int[] ccount = dfs(u, v, labels);
                for(int i = 0; i < 26; i++) {
                   count[i] = count[i] + ccount[i];
                }
                
            }
            /* System.out.println("done " + u);
            for(int i = 0; i < 26; i++) {
                System.out.println(count[i]);
            }
            */
        }
        ans[u] = count[labels.charAt(u) - 'a'];
        return count;
    }
    
    public int[] countSubTrees(int n, int[][] edges, String labels) {
        alist = new HashMap<>();
        visited = new boolean[n];
        ans = new int[n];
        for(int[] e : edges) {
            int u = e[0], v = e[1];
            if(alist.containsKey(u) == false) alist.put(u, new ArrayList<>());
            if(alist.containsKey(v) == false) alist.put(v, new ArrayList<>());
            alist.get(u).add(v);
            alist.get(v).add(u);
        }
        int[] count = dfs(-1, 0, labels);
        return ans;
    }
}