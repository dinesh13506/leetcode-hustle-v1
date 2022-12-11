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
    
    int ans = Integer.MIN_VALUE;
    public int postorder(TreeNode node) {
        if(node == null) return 0;
        
        int left = Math.max(postorder(node.left), 0);
        int right = Math.max(postorder(node.right), 0);
        ans = Math.max(ans, left + right + node.val);
        return Math.max(left + node.val, right + node.val);
    }
    public int maxPathSum(TreeNode root) {
        postorder(root);
        return ans;
    }
}