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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    
    //base case
    if(root == null) {
        return [];
    }
    
    let q = new Queue();
    let ans = [];
    q.enqueue(root);
    let reverse = false;
    while(q.isEmpty() == false) {
        let level = [];
        let temp = new Queue();
        while(q.isEmpty() == false) {
            let node = q.dequeue();
            level.push(node.val);
            if(node.left) {
                temp.enqueue(node.left);
            }
            if(node.right) {
                temp.enqueue(node.right);
            }
        }
        q = temp;
        if(reverse) { ans.push(level.reverse()); }
        else { ans.push(level);}
        reverse = !reverse;
    }
    return ans;
};