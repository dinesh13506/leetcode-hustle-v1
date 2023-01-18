class Solution {
public int evalRPN(String[] tokens) {
        Stack<Integer> stack = new Stack<>();
        int n = tokens.length;
        for(int i = 0; i < n; i++) {
            String token = tokens[i];
            switch(token) {
                case "+" : {
                    int a = stack.pop();
                    int b = stack.pop();
                    stack.push(a + b);
                    break;
                }
                case "-" : {
                    int a = stack.pop();
                    int b = stack.pop();
                    stack.push(b - a);
                    break;
                }

                case "/" : {
                    int a = stack.pop();
                    int b = stack.pop();
                    stack.push(b / a);
                    break;
                }
                case "*" : {
                    int a = stack.pop();
                    int b = stack.pop();
                    stack.push(b * a);
                    break;
                }
                default: {
                    stack.push(Integer.parseInt(token));
                }
            }
        }
        return stack.pop();
    }
}