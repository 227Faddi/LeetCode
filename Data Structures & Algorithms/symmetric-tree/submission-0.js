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
    isSymmetric(root) {
        if(!root) return true

        function dfs(left, right){
            if(!left && !right) return true
            if(!left || !right) return false


            if(left.val === right.val) {
                return dfs(left.left, right.right) && dfs(left.right, right.left)
            } else {
                return false
            }
        }

        return dfs(root.left, root.right)
    }
}
