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
    long ans = Long.MIN_VALUE;
    final int mod = 1000000007;
    ArrayList<Integer> sums;
    
    public int postorder(TreeNode root) {
        if(root == null) return 0;
        int left = postorder(root.left);
        int right = postorder(root.right);
        int total = root.val + left + right;
        sums.add(total);
        return total;
    }
    
    public int maxProduct(TreeNode root) {
        sums = new ArrayList<Integer>();
        long total = postorder(root);
        for(long sum : sums) {
            ans = Math.max(ans, (total - sum) * sum);
        }
        return (int) (ans % 1000000007);
    }
}