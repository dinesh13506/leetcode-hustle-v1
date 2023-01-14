    class Element {
        int value;
        int min;

        public Element(int value, int min) {
            this.value = value;
            this.min = min;
        }

        public int getValue() {
            return value;
        }

        public void setValue(int value) {
            this.value = value;
        }

        public int getMin() {
            return min;
        }

        public void setMin(int min) {
            this.min = min;
        }
    }

    class MinStack {

        Stack<Element> stack;
        public MinStack() {
            stack = new Stack<>();
        }

        public void push(int val) {
            if(stack.isEmpty()) stack.push(new Element(val, val));
            else {
                Element peek = stack.peek();
                int min = val < peek.getMin() ? val : peek.getMin();
                stack.push(new Element(val, min));
            }
        }

        public void pop() {
            if(stack.isEmpty() == false) stack.pop();
        }

        public int top() {
            return stack.peek().getValue();
        }

        public int getMin() {
            return stack.peek().getMin();
        }
    }

/**
 * Your MinStack object will be instantiated and called as such:
 * MinStack obj = new MinStack();
 * obj.push(val);
 * obj.pop();
 * int param_3 = obj.top();
 * int param_4 = obj.getMin();
 */