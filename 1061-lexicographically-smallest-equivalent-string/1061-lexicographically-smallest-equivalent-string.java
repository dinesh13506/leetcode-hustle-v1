class Solution {
        public void dfs(char u,HashSet<Character> visited, HashMap<Character, ArrayList<Character>> adjList, ArrayList<Character> component) {
        if(visited.contains(u)) return;
        visited.add(u);
        component.add(u);
        if(adjList.containsKey(u)) {
            for(char v : adjList.get(u)) {
                dfs(v, visited, adjList, component);
            }
        }
    }

    public String smallestEquivalentString(String s1, String s2, String baseStr) {
        HashMap<Character, ArrayList<Character>> adjList = new HashMap<>();
        int n1 = s1.length(), n2 = s2.length();
        ArrayList<Character> verticies = new ArrayList<>();
        for(int i = 0; i < n1; i++) {
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

        HashSet<Character> visited = new HashSet<>();
        HashMap<Character, Character> equivalent = new HashMap<>();
        for(char u : verticies) {
            if(visited.contains(u) == false) {
                ArrayList<Character> component = new ArrayList<>();
                dfs(u, visited, adjList,component);
                Collections.sort(component);
                char start = component.get(0);
                for(char a : component) {
                    equivalent.put(a, start);
                }
            }
        }
        StringBuilder sb = new StringBuilder();
        //System.out.println(baseStr.length());
        for(int i = 0; i < baseStr.length(); i++) {
            char ch = baseStr.charAt(i);
            if(equivalent.containsKey(ch)) {
                sb.append(equivalent.get(ch));
            } else {
                sb.append(ch);
            }
           
        }
        //System.out.println(sb.length());
        return sb.toString();
    }
}