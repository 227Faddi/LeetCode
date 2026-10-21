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
     * @return {boolean}
     */
    isValidBST(root) {

        function dfs(node, minimum, maximum){
            if(!node) return true
            
            if(minimum < node.val && node.val < maximum){
                return dfs(node.left, minimum, node.val) && dfs(node.right, node.val, maximum)
            } else {
                return false
            }
        }

        return dfs(root, -Infinity, Infinity)

    }
}
