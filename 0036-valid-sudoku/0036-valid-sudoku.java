class Solution {
    public boolean isValidSudoku(char[][] board) {
        final int m = board.length, n = board[0].length;
        int[][] startPoints = new int[9][2];
        startPoints[0] = new int[]{0,0};
        startPoints[1] = new int[]{0,3};
        startPoints[2] = new int[]{0,6};
        startPoints[3] = new int[]{3,0};
        startPoints[4] = new int[]{3,3};
        startPoints[5] = new int[]{3,6};
        startPoints[6] = new int[]{6,0};
        startPoints[7] = new int[]{6,3};
        startPoints[8] = new int[]{6,6};
        
        //check rows
        for(int r = 0; r < m; r++) {
            HashSet<Character> set = new HashSet<>();
            for(int c = 0; c < n; c++) {
                char ch = board[r][c];
                if(ch == '.') continue;
                else if(set.contains(ch)) return false;
                else {
                    set.add(ch);
                }
            }
        }

        //check cols
        for(int c = 0; c < n; c++) {
            HashSet<Character> set = new HashSet<>();
            for(int r = 0; r < m; r++) {
                char ch = board[r][c];
                if(ch == '.') continue;
                else if(set.contains(ch)) return false;
                else {
                    set.add(ch);
                }
            }
        }
        
        
        for(int[] point : startPoints) {
            int x = point[0], y = point[1];
            HashSet<Character> set = new HashSet<>();
            for(int r = x; r < x + 3; r++) {
                for(int c = y; c < y + 3; c++) {
                    char ch = board[r][c];
                    if(ch == '.') continue;
                    else if(set.contains(ch)) return false;
                    else {
                        set.add(ch);
                    }
                }
            }
        }
        return true;
    }
}