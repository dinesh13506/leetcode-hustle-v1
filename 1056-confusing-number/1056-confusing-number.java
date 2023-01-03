class Solution {
    public boolean isValid(int d) {
        if(d == 0 || d == 1 || d == 6 || d == 8 || d == 9) {
            return true;
        }
        return false;
    }
    
    public int reverse(int n) {
        int rev = 0;
        int p = 0;
        while(n > 0) {
            int d = n % 10;
            rev = (10 * rev) + d;
            //System.out.println(rev + " " + p);
            p++;
            n = n / 10;
        }
        return rev;
    }
    public boolean confusingNumber(int n) {
        int orig = n;
        int ans = 0;
        int p = 0;
        HashMap<Integer, Integer> map = new HashMap<>();
        map.put(0,0);
        map.put(1,1);
        map.put(6,9);
        map.put(9,6);
        map.put(8,8);
        
        n = reverse(n);
        //System.out.println(n);
        while(n > 0) {
            int d = n % 10;
            if(isValid(d)) {
                ans = (int) (Math.pow(10, p) * map.get(d)) + ans;
                p++;
            } else {
                return false;
            }
            n = n / 10;
        }
        //System.out.println(orig + " " + ans);
        return orig == ans ? false : true;
    }
}