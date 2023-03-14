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
 * @return {number}
 */
var sumNumbers = function(root) {
    
    let sum = 0;
    let dfs = (node, path) => {
        if(node == null) {
            return null;
        }
        if(node) {
            path.push(node.val);
            let l = dfs(node.left, path);
            let r = dfs(node.right, path);
            if(l == null && r == null) {
                //console.log(path);
                let num = parseInt(path.join(''));
                sum += num
            }
            return path.pop();
        }
    }
    
    dfs(root, []);
    return sum;
};