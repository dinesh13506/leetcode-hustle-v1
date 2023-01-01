class Solution {
    public boolean wordPattern(String pattern, String s) {
        String[] names = s.split(" ");
        final int n = names.length;
        HashMap<Character, String> map = new HashMap<>();
        if(names.length != pattern.length()) return false;
        for(int i = 0; i < n; i++) {
            if(map.containsKey(pattern.charAt(i)) && map.get(pattern.charAt(i)).equals(names[i]) == false) {
                return false;
            }
            map.put(pattern.charAt(i), names[i]);
        }
        HashMap<String, Character> map2 = new HashMap<>();
        for(int i = 0; i < n; i++) {
            if(map2.containsKey(names[i]) && map2.get(names[i]).equals(pattern.charAt(i)) == false) {
                return false;
            }
            map2.put(names[i],pattern.charAt(i));
        }
        return true;
    }
}