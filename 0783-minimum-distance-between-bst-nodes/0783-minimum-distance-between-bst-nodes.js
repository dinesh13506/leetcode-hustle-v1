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
var minDiffInBST = function(root) {
    
    let arr = [];
    let ans = Number.MAX_VALUE;
    let prev = null;
    let inorder = (node) => {
        if(node == null) return;
        inorder(node.left);
        arr.push(node.val);
        inorder(node.right);
    }
    inorder(root);
    //console.log(arr)
    for(let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            ans = Math.min(ans, Math.abs(arr[i] - arr[j]));
        }
    }
    return ans;
};