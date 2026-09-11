/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    /**
     * @param {TreeNode} root
     * @param {number} low
     * @param {number} high
     * @return {number}
     */
    rangeSumBST(root, low, high) {
        let res = 0

        function dfs(node){
            if(!node) return null

            if(node.val <= high && node.val >= low){
                res += node.val
            }

            if(node.val > low){
                dfs(node.left)
            }

            if(node.val < high){
                dfs(node.right)
            }
        }

        dfs(root)

        return res
    }
}
