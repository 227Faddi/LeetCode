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
    // return the binary tree reversed
    // reverse the childrens of each node recursively
    // check if the root is not empty
    // get one node, and reverse its childrens
    // store a tmp value to preverse one of them
    // call inverstTree recurvesly for both left and right nodes
    
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
