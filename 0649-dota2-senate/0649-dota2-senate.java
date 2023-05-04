class Solution {
    public String predictPartyVictory(String senate) {
        
        LinkedList<Integer> rq = new LinkedList();
        LinkedList<Integer> dq = new LinkedList();
        
        int n = senate.length();
        for(int i = 0; i < n; i++) {
            char ch = senate.charAt(i);
            if(ch == 'R') rq.add(i);
            else dq.add(i);
        }
        
        while(!rq.isEmpty() && !dq.isEmpty()) {
            int ri = rq.pollFirst();
            int di = dq.pollFirst();
            
            if(ri > di) {
                dq.add(di + n);
            }
            else {
                rq.add(ri + n);
            }
        }
        
        return rq.isEmpty() ? "Dire" : "Radiant";
        
       
    }
}