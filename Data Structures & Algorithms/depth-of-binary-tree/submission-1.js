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

    // receive the root of a binary tree
    // return its depth, so the longest number of nodes from top to bottom
    // use dps
    // check the depth of left side and right side for each node
    // augment a counter, then return the maximun depth between left and right side
    // do it recursively
    // check for empty root

    maxDepth(root) {
        if(!root) return 0

        let leftDepth = this.maxDepth(root.left)
        let rightDepth = this.maxDepth(root.right)

        return 1 + Math.max(leftDepth, rightDepth)
    }
}
