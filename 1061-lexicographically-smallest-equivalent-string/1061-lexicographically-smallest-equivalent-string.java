class Solution {
    HashMap<Character, ArrayList<Character>> adjList;
    HashSet<Character> visited;
    ArrayList<Character> verticies;
    HashMap<Character, Character> equivalent;
        
    public void dfs(char u, ArrayList<Character> component) {
        if(visited.contains(u)) return;
        visited.add(u);
        component.add(u);
        if(adjList.containsKey(u)) {
            for(char v : adjList.get(u)) {
                dfs(v, component);
            }
        }
    }

    public String smallestEquivalentString(String s1, String s2, String baseStr) {
        int n = s1.length();
        adjList = new HashMap<>();
        visited = new HashSet<>();
        verticies = new ArrayList<>();
        equivalent = new HashMap<>();
        
        for(int i = 0; i < n; i++) {
            char u = s1.charAt(i), v = s2.charAt(i);
            verticies.add(u);
            verticies.add(v);
            if(adjList.containsKey(u) == false) {
                adjList.put(u, new ArrayList<>());
            }
            if(adjList.containsKey(v) == false) {
                adjList.put(v, new ArrayList<>());
            }
            adjList.get(u).add(v);
            adjList.get(v).add(u);
        }

        for(char u : verticies) {
            if(visited.contains(u) == false) {
                ArrayList<Character> component = new ArrayList<>();
                dfs(u,component);
                Collections.sort(component);
                char start = component.get(0);
                for(char a : component) {
                    equivalent.put(a, start);
                }
            }
        }
        StringBuilder sb = new StringBuilder();
        for(int i = 0; i < baseStr.length(); i++) {
            char ch = baseStr.charAt(i);
            if(equivalent.containsKey(ch)) {
                sb.append(equivalent.get(ch));
            } else {
                sb.append(ch);
            }
           
        }
        return sb.toString();
    }
}