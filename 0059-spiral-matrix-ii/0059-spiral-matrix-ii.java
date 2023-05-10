class Solution {
    public int[][] generateMatrix(int n) {
        
        int[][] visited = new int[n][n];
        int[][] ans = new int[n][n];
        
        for(int i = 0; i < n; i++) {
            for(int j = 0; j < n; j++) {
                visited[i][j] = 0;
            }
        }
        
        int rstart = 0;
        int rend = n - 1;
        int cstart = 0;
        int cend = n - 1;
        int count = 1;
        
        while(rstart <= rend && cstart <= cend) {
            
            // first row
            for(int j = cstart; j <= cend; j++) {
                if(visited[rstart][j] == 0) {
                    ans[rstart][j] = count;
                    visited[rstart][j] = 1;
                    count++;
                }
            }
            
            //last col
            for(int i = rstart; i <= rend; i++) {
                if(visited[i][cend] == 0) {
                    ans[i][cend] = count;
                    visited[i][cend] = 1;
                    count++;
                }
            }
            
            //last row
            for(int j = cend; j >= cstart; j--) {
                if(visited[rend][j] == 0) {
                    ans[rend][j] = count;
                    visited[rend][j] = 1;
                    count++;
                }
            }
            
            //first col
            for(int i = rend; i >= rstart; i--) {
                if(visited[i][cstart] == 0) {
                    ans[i][cstart] = count;
                    visited[i][cstart] = 1;
                    count++;
                }
            }
            
            rstart++;
            rend--;
            cstart++;
            cend--;
        }
        
        return ans;
    }
}