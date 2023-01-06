class Solution {
    
    public boolean check(int m, int n, char[][] board) {
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
        return true;
    }
    public boolean isValidSudoku(char[][] board) {
        final int m = board.length, n = board[0].length;
        int[][] startPoints = new int[9][2];
        int p = 0;
        for(int i = 0; i < 9; i = i + 3) {
            for(int j = 0; j < 9; j = j + 3) {
                startPoints[p] = new int[]{i,j};
                p++;
            }
        }

        if( (check(m,n, board) && check(n, m, board)) == false) return false;


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