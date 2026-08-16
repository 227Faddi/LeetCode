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
    invertTree(root) {
        // check each node recursevely
        // swap its children
        // do it until the end with dfs
        if(!root) return null

        let tmp = root.left
        root.left = root.right
        root.right = tmp

        if(root.left){
            this.invertTree(root.left)
        }

        if(root.right){
            this.invertTree(root.right)
        }

        return root
    }
}
