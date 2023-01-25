class Solution {
    public boolean searchMatrix(int[][] matrix, int target) {
        if(matrix.length == 0) return false;
        final int m = matrix.length, n = matrix[0].length;
        int i = 0, j = n - 1;
        while(i >= 0 && i < m && j >= 0 && j < n) {
            //System.out.println(i + " " + j);
            if(matrix[i][j] == target) return true;
            else if(target < matrix[i][j]) {
                j--;
            } else {
                i++;
            }
        }
        return false;
    }
}