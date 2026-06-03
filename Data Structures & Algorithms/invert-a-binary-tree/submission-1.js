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
     * @return {TreeNode}
     */

    // receive a binary tree root
    // reverse the binary tree and return its root
    // check each node, and reverse the right and left pointers
    // do this recursevly until both nodes are null

    invertTree(root) {
        if(!root) return null

        let tmp = root.left
        root.left = root.right
        root.right = tmp

        this.invertTree(root.left)
        this.invertTree(root.right)

        return root
    }
}
