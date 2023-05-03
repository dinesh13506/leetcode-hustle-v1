class Solution {
    public String frequencySort(String s) {
        /*
        ascii value ranges
        0 - 9 => 48 - 57
        A-Z => 65 - 90
        a - z => 97 - 122
        so count array can have size => 122(max) - 48(min) + 1
        0 - 9 will fit in  0 - 9 index range
        A - Z will fit in 17 - 42 index range
        a - z will fit in 49 - 74 index range
        */
        int len = 122 - 48 + 1; // 75
        
        int[] count = new int[len]; //define count array
        
        //init counts to zero 
        for(int i = 0; i < len; i++) {
            count[i] = 0;
        }
        
        // calculate freq of every element
        for(int i = 0; i < s.length(); i++) {
            char ch = s.charAt(i);
            int idx = ch - 48;
            count[idx]++;
        }
        
        //define priority queue / heap
        PriorityQueue<int[] > pq = new PriorityQueue<int[]> ((a,b) -> {
             return b[1] - a[1];
        });
        
        //add elements which are present and have freq > 0
        for(int i = 0; i < len; i++) {
            if(count[i] != 0) {
                int[] arr = new int[2];
                arr[0] = i;
                arr[1] = count[i];
                pq.add(arr);
            }
        }
        
        
        //poll frequent element from heap and generate op
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