class Solution {
    public String frequencySort(String s) {
        /*
        System.out.println('0' - 0);
        System.out.println('9' - 0);
        System.out.println('A' - 0);
        System.out.println('z' - 0);
        */
        
        int len = 122 - 48 + 1;
        int[] count = new int[len];
        for(int i = 0; i < len; i++) {
            count[i] = 0;
        }
        
        for(int i = 0; i < s.length(); i++) {
            char ch = s.charAt(i);
            int idx = ch - 48;
            count[idx]++;
        }
        
        PriorityQueue<int[] > pq = new PriorityQueue<int[]> ((a,b) -> {
             return b[1] - a[1];
        });
        
        for(int i = 0; i < len; i++) {
            if(count[i] != 0) {
                int[] arr = new int[2];
                arr[0] = i;
                arr[1] = count[i];
                pq.add(arr);
            }
        }
        
        StringBuilder sb = new StringBuilder("");
        while(!pq.isEmpty()) {
            int[] arr = pq.poll();
            int freq = arr[1];
            while(freq > 0) {
                sb.append((char) (arr[0] + 48));
                freq--;
            }
        }
        
        return sb.toString();
    }
}