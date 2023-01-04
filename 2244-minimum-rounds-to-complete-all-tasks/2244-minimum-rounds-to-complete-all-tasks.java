class Solution {
    public int minimumRounds(int[] tasks) {
        int ans = 0;
        Stack<int [] > stack = new Stack<>();
        Arrays.sort(tasks);
        int n = tasks.length;
        
        for(int i = 0; i < n; i++) {
            if(stack.isEmpty()) {
                int[] arr = new int[2];
                arr[0] = tasks[i];
                arr[1] = 1;
                stack.push(arr);
                continue;
            } else {
                int[] top = stack.peek();
                if(top[0] == tasks[i]) {
                    if(top[1] < 3) {
                        top[1]++;
                    } else {
                        int[] arr = new int[2];
                        arr[0] = tasks[i];
                        arr[1] = 1;
                        stack.push(arr);
                    }
                } else {
                    int[] arr = new int[2];
                    arr[0] = tasks[i];
                    arr[1] = 1;
                    stack.push(arr);
                }
            }
        }
        
        //System.out.println(stack.size());
        while(stack.isEmpty() == false) {
            int[] top = stack.pop();
            //System.out.println(top[0] + " " + top[1]);
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