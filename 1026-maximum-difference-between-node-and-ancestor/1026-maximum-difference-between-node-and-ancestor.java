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
    public void maxAncestorDiffRec(TreeNode node, int min, int max) {
        if(node == null) return;
        min = Math.min(node.val, min);
        max = Math.max(node.val, max);
        maxAncestorDiffRec(node.left, min, max);
        maxAncestorDiffRec(node.right, min, max);
        int diff = Math.abs(min - max);
        ans = Math.max(diff, ans);
    }
    public int maxAncestorDiff(TreeNode root) {
        int min = Integer.MAX_VALUE;
        int max = Integer.MIN_VALUE;
        maxAncestorDiffRec(root, min, max);
        return ans;
    }
}