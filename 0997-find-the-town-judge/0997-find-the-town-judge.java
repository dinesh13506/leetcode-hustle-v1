class Solution {
    public class Trust {
        HashSet<Integer> trusted_by;
        HashSet<Integer> trust_on;
        public Trust() {
            this.trusted_by = new HashSet<Integer>();
            this.trust_on = new HashSet<Integer>();
        }
    }
    public int findJudge(int n, int[][] trust) {
        HashMap<Integer,Trust> ans = new HashMap<Integer,Trust>();
        for(int i = 1; i <= n; i++) {
            ans.put(i, new Trust());
        }
        for(int[] t : trust) {
            int a = t[0], b = t[1];
            ans.get(a).trust_on.add(b);
            ans.get(b).trusted_by.add(a);
        }
        for(int i = 1; i <= n; i++) {
            if(ans.get(i).trusted_by.size() == n-1 && ans.get(i).trust_on.size() == 0) {
                return i;
            }
        }
        return -1;
    }
}