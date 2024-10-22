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
    public long kthLargestLevelSum(TreeNode root, int k) {
        if(root == null) return -1;
        int levelCount = 0;
        ArrayList<Long> al = new ArrayList<>();
        Queue<TreeNode> queue = new LinkedList<TreeNode>();
        queue.add(root);
        queue.add(null);
        while(queue.size() > 0 ) {
            long levelSum= 0;
            while(queue.peek() != null) {
                TreeNode node = queue.poll();
                levelSum = levelSum + node.val;
                if(node.left != null) {
                    queue.add(node.left);
                }
                if(node.right != null) {
                    queue.add(node.right);
                }
            }
            //System.out.println("levelSum = " + levelSum);
            levelCount++;
            al.add(levelSum);
            queue.poll();
            if(queue.size() > 0 ) queue.add(null);
        }
        if(levelCount < k) return -1;
        al.sort(new Comparator<Long>() {
            @Override
            public int compare(Long o1, Long o2) {
                return o2.compareTo(o1);
            }
        });
        return al.get(k-1);
    }
}