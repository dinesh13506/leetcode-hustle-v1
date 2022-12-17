class Solution {
    
    public boolean isOperator(String str) {
        if(str.equals("+") || str.equals("-") || str.equals("/") || str.equals("*") ) return true;
        return false;
    }
    public int evalRPN(String[] tokens) {
        Stack<Integer> stack = new Stack<Integer>();
        final int n = tokens.length;
        for(int i = 0; i < n; i++) {
            if(isOperator(tokens[i])) {
                int op2 = stack.pop();
                int op1 = stack.pop();
                switch(tokens[i]) {
                    case "+":
                        stack.push(op1 + op2);
                        break;
                    case "-" :
                        stack.push(op1 - op2);
                        break;
                    case "*" :
                        stack.push(op1 * op2);
                        break;
                    case "/" :
                        stack.push(op1 / op2);
                        break;
                }
            } else {
                stack.push(Integer.parseInt(tokens[i]));
            }
        }
        return stack.pop();
    }
}