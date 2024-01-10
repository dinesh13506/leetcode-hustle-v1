/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} start
 * @return {number}
 */
var amountOfTime = function(root, start) {
    let parentMap = new Map();
    let startNode = null;
    
    let dfs = (curr, parent) => {
        if(curr == null) {
            return null;
        }
        if(curr.val == start) {
            startNode = curr;
        }
        parentMap.set(curr.val, parent);
        dfs(curr.left, curr);
        dfs(curr.right, curr);
    }
    dfs(root, null);
    //console.log(startNode)
    if(!startNode) {
        return 0;
    }
    //console.log(parentMap);
    let visited = new Set();
    let queue = new Queue();
    queue.enqueue(startNode);
    visited.add(startNode.val);
    startNode.time = 0;
    let ans = 0;
    while(queue.isEmpty() == false) {
        let node = queue.dequeue();
        let p = parentMap.get(node.val);
        let left = node.left;
        let right = node.right;
        let count = 0;
        if(p) {
            if(visited.has(p.val) == false) {
                queue.enqueue(p);
                visited.add(p.val);
                p.time = node.time + 1;
                ans = Math.max(ans,p.time);
                
            }
        }
        if(left) {
            if(visited.has(left.val) == false) {
                queue.enqueue(left);
                visited.add(left.val);
                left.time = node.time + 1;
                ans = Math.max(ans,left.time);
            }
        }
        if(right) {
            if(visited.has(right.val) == false) {
                queue.enqueue(right);
                visited.add(right.val);
                right.time = node.time + 1;
                ans = Math.max(ans,right.time);
            }
        }
        
    }
    return ans;
};