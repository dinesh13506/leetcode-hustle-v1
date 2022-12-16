class MyQueue {

    Stack<Integer> stack1;
    Stack<Integer> stack2;
    public MyQueue() {
        stack1 = new  Stack<Integer>();
        stack2 = new Stack<Integer>();
    }
    
    public void push(int x) {
        stack1.push(x);
    }
    
    public int pop() {
        if(stack2.size() > 0) {
            return stack2.pop();
        } else {
            while(stack1.size() > 0) {
                stack2.push(stack1.pop());
            }
            return stack2.pop();
        }
    }
    
    public int peek() {
        if(stack2.size() > 0) {
            return stack2.peek();
        } else {
            while(stack1.size() > 0) {
                stack2.push(stack1.pop());
            }
            return stack2.peek();
        }
    }
    
    public boolean empty() {
        return !(stack1.size() > 0 || stack2.size() > 0);
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * MyQueue obj = new MyQueue();
 * obj.push(x);
 * int param_2 = obj.pop();
 * int param_3 = obj.peek();
 * boolean param_4 = obj.empty();
 */