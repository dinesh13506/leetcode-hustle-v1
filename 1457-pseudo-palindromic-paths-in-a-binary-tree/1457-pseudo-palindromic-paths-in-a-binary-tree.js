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
var pseudoPalindromicPaths  = function(root) {
    let ans = 0;
    let count = new Array(10);
    count.fill(0);
    let dfs = (node) => {
        if(!node) {
            return;
        }
        count[node.val]++;
        if(node.left == null && node.right == null) {
            let odd = 0;
            for(let i = 1; i <=9; i++) {
                if(count[i] % 2 == 1) {
                    odd++;
                }
            }
            if(odd <= 1) {
                ans++;
            }
            count[node.val]--;
            return;
        }
        
        //console.log(node.val, count);
        dfs(node.left);
        dfs(node.right);
        //calculate here
        //console.log(count)
       
        count[node.val]--;
    }
    
    dfs(root);
    return ans;
};