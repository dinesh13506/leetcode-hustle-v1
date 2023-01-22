class Solution {
    List<List<String>> ans;
    
    public boolean isPalindrome(String s, int i , int j) {
        int p1 = i, p2 = j;
        while(p1 < p2) {
            if(s.charAt(p1) != s.charAt(p2)) return false;
            p1++;
            p2--;
        }
        return true;
    }
    
    public void generate(String s, int i, List<String> list) {
        if(i >= s.length()) {
            ans.add(new ArrayList<String>(list));
            return;
        }
        for(int j = i; j < s.length(); j++) {
            if(isPalindrome(s,i,j)) {
                list.add(s.substring(i, j + 1));
                generate(s, j+1, list);
                list.remove(list.size() - 1);
            }
        }
    }
    
    public List<List<String>> partition(String s) {
        ans = new ArrayList<List<String>>();
        generate(s, 0, new ArrayList<String>());
        return ans;
    }
}