/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    List<Integer> nodes;
    
    public void preorder(TreeNode node) {
        if(node == null) return;
        nodes.add(node.val);
        preorder(node.left);
        preorder(node.right);
    }
    public List<Integer> preorderTraversal(TreeNode root) {
        nodes = new ArrayList<>();
        if(root == null) return nodes;
        Stack<TreeNode> stack = new Stack<>();
        stack.push(root);
        while(stack.isEmpty() == false) {
            TreeNode node = stack.pop();
            if(node != null) {
                nodes.add(node.val);
                stack.push(node.right);
                stack.push(node.left);
            }
            
        }
        return nodes;
    }
}