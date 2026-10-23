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
    evaluateTree(root) {
        
        function dfs(node){
            if(!node) return true

            if(node.val === 1) return true
            if(node.val === 0) return false

            if(node.val === 2){
                return dfs(node.left) || dfs(node.right)
            }

            if(node.val === 3){
                return dfs(node.left) && dfs(node.right)
            }
        }

        return dfs(root)
    }
}
