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
     * @return {number}
     */
    maxPathSum(root) {
        this.max = root.val
        this.dfs(root)
        return this.max
    }

    dfs(root){
        if(!root) return 0

        let leftMax = this.dfs(root.left)
        let rightMax = this.dfs(root.right)
        leftMax = Math.max(leftMax, 0)
        rightMax = Math.max(rightMax, 0)

        this.max = Math.max(this.max, (root.val + leftMax + rightMax))

        return root.val + Math.max(leftMax, rightMax)
    }
}
