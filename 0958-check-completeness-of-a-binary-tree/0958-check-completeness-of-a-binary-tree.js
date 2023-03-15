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
 * @return {boolean}
 */
var isCompleteTree = function(root) {
    
    if(root == null) return true;
    
    let nullfound = false;
    let q = new Queue();
    q.enqueue(root);
    while(!q.isEmpty()) {
        let node = q.dequeue();
        if(node == null) {
           nullfound = true; 
        } else {
            if(nullfound) return false;
            q.enqueue(node.left);
            q.enqueue(node.right);
        }
    }
    return true;
};