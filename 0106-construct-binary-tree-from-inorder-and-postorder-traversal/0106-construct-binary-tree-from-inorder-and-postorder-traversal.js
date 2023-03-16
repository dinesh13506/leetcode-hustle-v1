/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */

let post_index = 0
let map = {}
var buildTree = function(inorder, postorder) {
    let length = inorder.length
    post_index = length - 1
    
    map = {}
    for( let i = 0; i < length; i++) {
        map[inorder[i]] = i
    }
    let is = 0
    let ie = length - 1
    return ctree(inorder, postorder, is, ie)
};

let ctree = function(inorder, postorder, is, ie) {
    if( post_index < 0 || is > ie) {
        return null
    }
    
    
    let data = postorder[post_index]
    let root = new TreeNode(data,null,null)
    post_index--
    let index = map[data]
    
    root.right = ctree(inorder, postorder, index+1, ie)
    root.left = ctree(inorder, postorder, is, index-1)
    return root
}