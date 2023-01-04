class Solution {
    Stack<int [] > stack;
    
    public void addToStack(int task, int count) {
        int[] arr = new int[2];
        arr[0] = task;
        arr[1] = count;
        stack.push(arr);
    }
    public int minimumRounds(int[] tasks) {
        int ans = 0;
        stack = new Stack<>();
        Arrays.sort(tasks);
        int n = tasks.length;
        
        for(int i = 0; i < n; i++) {
            if(stack.isEmpty()) {
                addToStack(tasks[i], 1);
                continue;
            } else {
                int[] top = stack.peek();
                if(top[0] == tasks[i]) {
                    if(top[1] < 3) {
                        top[1]++;
                    } else {
                        addToStack(tasks[i], 1);
                    }
                } else {
                    addToStack(tasks[i], 1);
                }
            }
        }
        while(stack.isEmpty() == false) {
            int[] top = stack.pop();
            if(top[1] == 2 || top[1] == 3) {
                ans++;
            } else {
                if(stack.isEmpty()) return -1;
                else {
                    int[] prev = stack.peek();
                    if(prev[1] == 3 && prev[0] == top[0]) {
                        ans++;
                    } else {
                        return -1;
                    }
                }
            }
            
        }
        return ans;
    }
}