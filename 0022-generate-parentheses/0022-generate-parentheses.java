class Solution {
   public boolean isValid(String str) {
        Stack<Character> stack = new Stack<>();
        for(int i = 0; i < str.length(); i++) {
            char ch = str.charAt(i);
            if(ch == ')') {
                if(stack.isEmpty()) return false;
                char peek = stack.peek();
                if(peek != '(') return false;
                stack.pop();
            } else {
                stack.push('(');
            }
        }
        return stack.isEmpty();
    }
   public void generateAllStrings(List<String> list, StringBuilder sb, int open, int close) {
        if(open == 0 && close == 0) {
            if(isValid(sb.toString()))
                list.add(sb.toString());
            return;
        }
        if(open > 0) {
            generateAllStrings(list, sb.append("("), open - 1, close);
            sb.deleteCharAt(sb.length() - 1);
        }
        if(close > 0) {
            generateAllStrings(list, sb.append(")"), open, close - 1);
            sb.deleteCharAt(sb.length() - 1);
        }
    }

    public List<String> generateParenthesis(int n) {

        List<String> list = new ArrayList<>();
        StringBuilder sb  = new StringBuilder();
        generateAllStrings(list, sb, n, n);
        return list;
    }
}