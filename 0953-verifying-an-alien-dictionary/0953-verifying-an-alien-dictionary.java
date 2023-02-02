class Solution {
    public boolean isAlienSorted(String[] words, String order) {
        HashMap<Character, Integer> map = new HashMap<>();
        int id = 1;
        for(int i = 0; i < order.length(); i++) {
            char ch = order.charAt(i);
            map.put(ch, id);
            id++;
        }
        
        List<String> al = new ArrayList<String>();
        for(String w : words) {
            al.add(w);
        }
        
        //a == b, return 0
        // a < b, return -1
        // a > b , return 1
        Collections.sort(al, (a,b) -> {
            if(a.length() == b.length()) {
                int n = a.length();
                for(int i = 0; i < n; i++) {
                    char ch1 = a.charAt(i);
                    char ch2 = b.charAt(i);
                    if(map.get(ch1) == map.get(ch2)) {
                        continue;
                    } else {
                        return map.get(ch1) - map.get(ch2) > 0 ? 1 : -1;
                    }
                }
                return 0;
            }
            else if(a.length() < b.length()) {
                int n = Math.min(a.length(), b.length());
                for(int i = 0; i < n; i++) {
                    char ch1 = a.charAt(i);
                    char ch2 = b.charAt(i);
                    if(map.get(ch1) == map.get(ch2)) {
                        continue;
                    } else {
                        return map.get(ch1) - map.get(ch2) > 0 ? 1 : -1;
                    }
                }
                return -1;
            }
            else {
                int n = Math.min(a.length(), b.length());
                for(int i = 0; i < n; i++) {
                    char ch1 = a.charAt(i);
                    char ch2 = b.charAt(i);
                    if(map.get(ch1) == map.get(ch2)) {
                        continue;
                    } else {
                        return map.get(ch1) - map.get(ch2) > 0 ? 1 : -1;
                    }
                }
                return 1;
            }
        });
        
        /*for(String w : al) {
            System.out.println(w);
        }*/
        for(int i = 0; i < words.length; i++) {
            if(al.get(i).equals(words[i]) == false) {
                return false;
            }
        }
        return true;
        
    }
}