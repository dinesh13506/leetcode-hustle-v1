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
 * @return {number[]}
 */
var findMode = function(root) {
    
    let map = new Map();
    let max = 0;
    let inorder = (node) => {
        if(!node) return;
        if(map.has(node.val)) {
            map.set(node.val, map.get(node.val) + 1);
        } else {
             map.set(node.val, 1);
        }
        max = Math.max(map.get(node.val), max);
        inorder(node.left);
        inorder(node.right);
    }
   
    inorder(root);
    //console.log(map, max)
    let ans = [];
    for(let key of map.keys()) {
        if(map.get(key) == max) {
            ans.push(key);
        }
    }
    return ans;
};