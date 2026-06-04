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

    // receive a root node of a binary tree
    // return the number of the max depth

    maxDepth(root) {
        if(!root) return 0

        let leftCount = this.maxDepth(root.left)
        let rightCount = this.maxDepth(root.right)

        return 1 + Math.max(leftCount, rightCount)
    }
}
