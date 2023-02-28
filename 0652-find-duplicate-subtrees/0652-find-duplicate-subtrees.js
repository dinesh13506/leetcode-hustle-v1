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
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function(root) {
    let ans = [];
    let map = new Map();
    let preorder = (node) => {
        if(node) {
            let l = preorder(node.left);
            let r = preorder(node.right);
            let str = `(${l})` + `${node.val}` + `(${r})`;
            if(map.has(str) == false) {
                map.set(str, 1);
            } else {
                 map.set(str, map.get(str) + 1);
            }
            if(map.get(str) == 2) {
                ans.push(node);
            }
            //console.log(str);
            return str;
        } else {
            return '';
        }
    }
    preorder(root);
    return ans;
};