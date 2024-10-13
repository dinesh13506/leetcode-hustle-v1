class Solution {
    public void setZeroes(int[][] matrix) {
        final int m = matrix.length;
        final int n = matrix[0].length;

        boolean firstRow =  false;
        boolean firstCol = false;
        
        for(int  i = 0 ; i < m ;i++) {
            if(matrix[i][0] == 0){ firstCol = true; break;}
        }
        
        for(int j = 0 ; j < n; j++) {
            if(matrix[0][j] == 0) {
                firstRow = true;
                break;
            }
        }
        
        
        for(int i = 1; i < m; i++) {
            for(int j = 1; j < n; j++) {
                if(matrix[i][j] != 0) continue;
                matrix[0][j] = 0;
                matrix[i][0] = 0;
            }
        }
        for(int i = 1; i < m; i++) {
            for(int j = 1; j < n; j++) {
                if(matrix[i][0] == 0 || matrix[0][j] == 0) {
                    matrix[i][j] = 0;
                }
            }
        }
        if(firstRow) {
            int c = 0;
            while(c < n) {
                matrix[0][c] = 0;
                c++;
            }
        }
        if(firstCol) {
            int r = 0;
            while(r < m) {
                matrix[r][0] = 0;
                r++;
            }
        }
        

    }
}