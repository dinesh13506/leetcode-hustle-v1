class Solution {
    
    public String getKey(char[] arr) {
        StringBuilder sb = new StringBuilder("");
        for(char ch : arr) sb.append(ch);
        
        return sb.toString();
    }
    
    public List<List<String>> groupAnagrams(String[] strs) {
        int n = strs.length;
        HashMap<String, ArrayList<String>> map = new HashMap<>();
        for(int i = 0; i < n; i++) {
            char[]  arr = strs[i].toCharArray();
            Arrays.sort(arr);
            String key = getKey(arr);
            if(map.containsKey(key)) {
                map.get(key).add(strs[i]);
            } else {
                map.put(key, new ArrayList<String>());
                map.get(key).add(strs[i]);
            }
        }
        List<List<String>> ans = new ArrayList<List<String>>();
        for(String key : map.keySet()) {
            ans.add(map.get(key));
        }
        return ans;
    }
}